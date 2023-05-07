import { Color, COLOR, FIGURE_TYPE, PositionString, FigurePositionMap } from "../types";
import { Position } from "../Position";
import { isCellIndex } from "../utills/isCellIndex";
import { Figure } from "../Figure";
import { rock } from "../moveDirections/rock";
import { queen } from "../moveDirections/queen";
import { king } from "../moveDirections/king";
import { whitePawn } from "../moveDirections/whitePawn";
import { blackPawn } from "../moveDirections/blackPawn";
import { bishop } from "../moveDirections/bishop";
import { knight } from "../moveDirections/knight";

type FigureWithPosition = { figure: Figure; position: Position };

export const getOppositeColor = (color: Color) => {
  return color === COLOR.white ? COLOR.black : COLOR.white;
};

export class Model {
  selectedCell: {
    position: Position;
  } | null;
  onModelChange: (model: Model) => void;
  currentTurn: Color;
  readonly figures: FigurePositionMap;

  constructor(defaultFigurePositionMap: FigurePositionMap) {
    this.selectedCell = null;
    this.currentTurn = COLOR.white;
    this.onModelChange = () => {
      throw new Error("You should specify onModelChange");
    };
    this.figures = defaultFigurePositionMap;
  }

  private toggleTurn() {
    this.currentTurn = getOppositeColor(this.currentTurn);
  }

  public getFigure(position: Position): Figure | null {
    return this.figures.get(position.toString()) ?? null;
  }

  private moveCheck(position: Position): boolean {
    const isCellFree = !this.getFigure(position);

    return isCellFree;
  }

  private updateAvailableMoves(
    figure: Figure,
    directions: Position[][],
    isMoveAvailable: (position: Position) => boolean
  ): void {
    figure.availableMoves = new Set<PositionString>();

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];

        if (isMoveAvailable(position)) {
          figure.availableMoves.add(position.toString());
          continue;
        }
        break;
      }
    }
  }

  private updateAvailableTakes(figure: Figure, directions: Position[][]): void {
    figure.availableTakes = new Set();

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];

        if (!isCellIndex(position.x) || !isCellIndex(position.y)) return;

        let figureOnTheWay = this.getFigure(position);

        if (figureOnTheWay) {
          const isEnemyOnTheWay = figureOnTheWay.color !== figure.color;

          if (isEnemyOnTheWay) {
            figure.availableTakes.add(position.toString());
          }
          break;
        }
      }
    }
  }

  private updateFigureState(figureWithPosition: FigureWithPosition): void {
    const { figure } = figureWithPosition;

    switch (figure.type) {
      case FIGURE_TYPE.pawn:
        figure.color === COLOR.white
          ? this.whitePawnUpdate(figureWithPosition)
          : this.blackPawnUpdate(figureWithPosition);
        break;
      case FIGURE_TYPE.knight:
        this.knightUpdate(figureWithPosition);
        break;
      case FIGURE_TYPE.rook:
        this.rookUpdate(figureWithPosition);
        break;
      case FIGURE_TYPE.bishop:
        this.bishopUpdate(figureWithPosition);
        break;
      case FIGURE_TYPE.queen:
        this.queenUpdate(figureWithPosition);
        break;
      case FIGURE_TYPE.king:
        this.kingUpdate(figureWithPosition);
        break;
    }
  }

  public updateFieldState(): void {
    this.figures.forEach((figure, positionStr) => {
      const figureWithPositon = {
        figure,
        position: Position.posStrToObj(positionStr),
      };

      this.updateFigureState(figureWithPositon);
    });
  }

  public readonly initializeFieldState = this.updateFieldState;

  public bindModelChange(callback: (model: Model) => void): void {
    this.onModelChange = callback;
  }

  private commitChanges(model: Model): void {
    this.onModelChange(model);
  }

  public trySelectFigure(position: Position): void {
    const selectedFigure = this.getFigure(position);

    if (!selectedFigure) return;

    if (selectedFigure.color !== this.currentTurn) return;

    this.selectedCell = {
      position,
    };

    this.commitChanges(this);
  }

  public tryMoveFigure(positionFrom: Position, positionTo: Position): void {
    const positionFromFigure = this.getFigure(positionFrom);
    const positionToFigure = this.getFigure(positionTo);

    if (!positionFromFigure) return;
    if (positionToFigure) return;

    const isAvailableToMove = positionFromFigure.availableMoves.has(positionTo.toString());

    if (!isAvailableToMove) return;

    const figureToMove = this.figures.get(positionFrom.toString());

    if (!figureToMove) return;

    this.figures.set(positionTo.toString(), figureToMove);
    this.figures.delete(positionFrom.toString());

    positionFromFigure.isMoved = true;
    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges(this);
  }

  public tryTakeFigure(positionFrom: Position, positionTo: Position): void {
    const positionFromFigure = this.getFigure(positionFrom);
    const positionToFigure = this.getFigure(positionTo);

    if (!positionFromFigure) return;
    if (!positionToFigure) return;
    if (positionFromFigure.color === positionToFigure.color) return;

    const isAvailableToTake = !positionFromFigure.availableTakes.has(positionTo.toString());

    const figureToMove = this.figures.get(positionFrom.toString());

    if (isAvailableToTake) return;

    if (!figureToMove) return;

    this.figures.set(positionTo.toString(), figureToMove);
    this.figures.delete(positionFrom.toString());

    positionFromFigure.isMoved = true;

    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges(this);
  }

  public whitePawnUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      whitePawn.moveDirections(figWithPos.position, figWithPos.figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, whitePawn.takeDirections(figWithPos.position));
  }

  public blackPawnUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      blackPawn.move(figWithPos.position, figWithPos.figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, blackPawn.take(figWithPos.position));
  }

  public knightUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      knight.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, knight.take(figWithPos.position));
  }

  public rookUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      rock.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, rock.take(figWithPos.position));
  }

  public bishopUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      bishop.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, bishop.take(figWithPos.position));
  }

  public queenUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      queen.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, queen.take(figWithPos.position));
  }

  public kingUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      king.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, king.take(figWithPos.position));
  }
}
