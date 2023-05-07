import {Color, COLOR, FIGURE_TYPE, FigurePositionMap, PositionString} from "../types";
import {Position} from "../Position";
import {Figure} from "../Figure";
import {rock} from "../moveDirections/rock";
import {queen} from "../moveDirections/queen";
import {king} from "../moveDirections/king";
import {whitePawn} from "../moveDirections/whitePawn";
import {blackPawn} from "../moveDirections/blackPawn";
import {bishop} from "../moveDirections/bishop";
import {knight} from "../moveDirections/knight";
import {getOppositeColor} from "../utills/getOppositeColor";

type FigureWithPosition = { figure: Figure; position: Position };

export class Model {
  currentTurn: Color;
  selectedCell: {
    position: Position;
  } | null;
  readonly figures: FigurePositionMap;

  constructor(defaultFigurePositionMap: FigurePositionMap) {
    this.selectedCell = null;
    this.currentTurn = COLOR.white;
    this.figures = defaultFigurePositionMap;
  }

  private commitChanges() {
    throw new Error("You should specify onModelChange");
  };

  private toggleTurn() {
    this.currentTurn = getOppositeColor(this.currentTurn);
  }

  public getFigure(position: Position): Figure | null {
    return this.figures.get(position.toString()) ?? null;
  }

  private moveCheck(position: Position): boolean {
    return !this.getFigure(position);
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
        let figureOnTheWay = this.getFigure(directions[i][j]);

        if (figureOnTheWay) {
          const isEnemyOnTheWay = figureOnTheWay.color !== figure.color;

          if (isEnemyOnTheWay) {
            figure.availableTakes.add(directions[i][j].toString());
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

  private updateFieldState(): void {
    this.figures.forEach((figure, positionStr) => {
      const figureWithPositon = {
        figure,
        position: Position.posStrToObj(positionStr),
      };

      this.updateFigureState(figureWithPositon);
    });
  }

  public readonly initializeFieldState = this.updateFieldState;

  public bindCommitChanges(callback: () => void): void {
    this.commitChanges = callback;
  }

  public trySelectFigure(position: Position): void {
    const selectedFigure = this.getFigure(position);

    if (!selectedFigure) return;

    if (selectedFigure.color !== this.currentTurn) return;

    this.selectedCell = {
      position,
    };

    this.commitChanges();
  }

  public tryMoveFigure(positionFrom: Position, positionTo: Position): void {
    const figureFrom = this.getFigure(positionFrom);
    const figureTo = this.getFigure(positionTo);

    if (!figureFrom) return;
    if (figureTo) return;

    const isAvailableToMove = figureFrom.availableMoves.has(positionTo.toString());

    if (!isAvailableToMove) return;

    this.figures.set(positionTo.toString(), figureFrom);
    this.figures.delete(positionFrom.toString());

    figureFrom.isMoved = true;
    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges();
  }

  public tryTakeFigure(positionFrom: Position, positionTo: Position): void {
    const figureFrom = this.getFigure(positionFrom);
    const figureTo = this.getFigure(positionTo);

    if (!figureFrom) return;
    if (!figureTo) return;
    if (figureFrom.color === figureTo.color) return;

    const isAvailableToTake = !figureFrom.availableTakes.has(positionTo.toString());

    if (isAvailableToTake) return;

    this.figures.set(positionTo.toString(), figureFrom);
    this.figures.delete(positionFrom.toString());

    figureFrom.isMoved = true;
    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges();
  }

  private whitePawnUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      whitePawn.moveDirections(figWithPos.position, figWithPos.figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, whitePawn.takeDirections(figWithPos.position));
  }

  private blackPawnUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      blackPawn.move(figWithPos.position, figWithPos.figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, blackPawn.take(figWithPos.position));
  }

  private knightUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      knight.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, knight.take(figWithPos.position));
  }

  private rookUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      rock.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, rock.take(figWithPos.position));
  }

  private bishopUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      bishop.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, bishop.take(figWithPos.position));
  }

  private queenUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      queen.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, queen.take(figWithPos.position));
  }

  private kingUpdate(figWithPos: FigureWithPosition): void {
    this.updateAvailableMoves(
      figWithPos.figure,
      king.move(figWithPos.position),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figWithPos.figure, king.take(figWithPos.position));
  }
}
