import { Position, Color, COLOR, FIGURE_TYPE, PositionString, FigurePositions } from "./types";
import { posToPosStr } from "./helpers/posToStr";
import { strToPos } from "./helpers/strToPos";
import { objectEntries } from "./helpers/objectEntries";
import { isCellIndex } from "./helpers/isCellIndex";
import { Figure } from "./Figure";
import {
  whitePawnMoveDirections,
  blackPawnMoveDirections,
  whitePawnTakeDirections,
  blackPawnTakeDirections,
  knightDirections,
  bishopDirections,
  rockDirections,
  queenDirections,
  kingDirections,
} from "./moveDirections";

export const getOppositeColor = (color: Color) => {
  return color === COLOR.white ? COLOR.black : COLOR.white;
};

export class Model {
  selectedCell: {
    position: Position;
  } | null;
  onModelChange: (model: Model) => void;
  currentTurn: Color;
  readonly figures: Partial<{ [key in PositionString]: Figure }>;

  constructor(defaultFigurePosition: FigurePositions) {
    this.selectedCell = null;
    this.currentTurn = COLOR.white;
    this.onModelChange = () => {
      throw new Error("You should specify onModelChange");
    };
    this.figures = defaultFigurePosition;
  }

  private toggleTurn() {
    this.currentTurn = getOppositeColor(this.currentTurn);
  }

  public getFigure(position: Position): Figure | null {
    return this.figures[posToPosStr(position)] ?? null;
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
    figure.availableMoves = [];

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];

        if (isMoveAvailable(position)) {
          figure.availableMoves.push(position);
          continue;
        }
        break;
      }
    }
  }

  private updateAvailableTakes(figure: Figure, directions: Position[][]): void {
    figure.availableTakes = [];

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];

        if (!isCellIndex(position.x) || !isCellIndex(position.y)) return;

        let figureOnTheWay = this.getFigure(position);

        if (figureOnTheWay) {
          const isEnemyOnTheWay = figureOnTheWay.color !== figure.color;

          if (isEnemyOnTheWay) {
            figure.availableTakes.push(position);
          }
          break;
        }
      }
    }
  }

  private updateFigureState(figPosStr: PositionString, figure: Figure): void {
    const figureStrPos = strToPos(figPosStr);

    switch (figure.type) {
      case FIGURE_TYPE.pawn:
        figure.color === COLOR.white
          ? this.whitePawnCheck(figure, figureStrPos)
          : this.blackPawnCheck(figure, figureStrPos);
        break;
      case FIGURE_TYPE.knight:
        this.knightCheck(figure, figureStrPos);
        break;
      case FIGURE_TYPE.rook:
        this.rookCheck(figure, figureStrPos);
        break;
      case FIGURE_TYPE.bishop:
        this.bishopCheck(figure, figureStrPos);
        break;
      case FIGURE_TYPE.queen:
        this.queenCheck(figure, figureStrPos);
        break;
      case FIGURE_TYPE.king:
        this.kingCheck(figure, figureStrPos);
        break;
    }
  }

  public updateFieldState(): void {
    objectEntries(this.figures).forEach(([figPosStr, figure]) => {
      if (!figure) return;
      this.updateFigureState(figPosStr, figure);
    });
  }

  public readonly initializeFieldState = this.updateFieldState;

  public bindModelChange(callback: (model: Model) => void): void {
    this.onModelChange = callback;
  }

  private commitChanges(model: Model): void {
    this.onModelChange(model);
  }

  public trySelectFigure({ x, y }: Position): void {
    const selectedFigure = this.getFigure({ x, y });

    if (!selectedFigure) return;

    if (selectedFigure.color !== this.currentTurn) return;

    this.selectedCell = {
      position: { x, y },
    };

    this.commitChanges(this);
  }

  public tryMoveFigure(positionFrom: Position, positionTo: Position): void {
    const positionFromFigure = this.getFigure(positionFrom);
    const positionToFigure = this.getFigure(positionTo);

    if (!positionFromFigure) return;
    if (positionToFigure) return;

    const isAvailableToMove = positionFromFigure.availableMoves.some((move) => {
      return move.x === positionTo.x && move.y === positionTo.y;
    });

    if (!isAvailableToMove) return;

    this.figures[posToPosStr(positionTo)] = this.figures[posToPosStr(positionFrom)];
    delete this.figures[posToPosStr(positionFrom)];

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

    const isAvailableToTake = !positionFromFigure.availableTakes.some(
      (availableTake) => availableTake.x === positionTo.x || availableTake.y === positionTo.y
    );

    if (isAvailableToTake) return;

    this.figures[posToPosStr(positionTo)] = this.figures[posToPosStr(positionFrom)];
    delete this.figures[posToPosStr(positionFrom)];

    positionFromFigure.isMoved = true;

    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges(this);
  }

  public whitePawnCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(
      figure,
      whitePawnMoveDirections(figurePosition, figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figure, whitePawnTakeDirections(figurePosition));
  }

  public blackPawnCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(
      figure,
      blackPawnMoveDirections(figurePosition, figure.isMoved),
      this.moveCheck.bind(this)
    );
    this.updateAvailableTakes(figure, blackPawnTakeDirections(figurePosition));
  }

  public knightCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(figure, knightDirections(figurePosition), this.moveCheck.bind(this));
    this.updateAvailableTakes(figure, knightDirections(figurePosition));
  }

  public rookCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(figure, rockDirections(figurePosition), this.moveCheck.bind(this));
    this.updateAvailableTakes(figure, rockDirections(figurePosition));
  }

  public bishopCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(figure, bishopDirections(figurePosition), this.moveCheck.bind(this));
    this.updateAvailableTakes(figure, bishopDirections(figurePosition));
  }

  public queenCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(figure, queenDirections(figurePosition), this.moveCheck.bind(this));
    this.updateAvailableTakes(figure, queenDirections(figurePosition));
  }

  public kingCheck(figure: Figure, figurePosition: Position): void {
    this.updateAvailableMoves(figure, kingDirections(figurePosition), this.moveCheck.bind(this));
    this.updateAvailableTakes(figure, kingDirections(figurePosition));
  }
}

// TODO
// Определять пат
// Под шахом, давать возможность делать только те действия, которые выводят из шаха
// Сделать возможность рубить в проходе
// Добавить возможность ракеровки
// Вести учет срубленых фигур
// Сделать DnD
// Показывать плавное перемещение фигур
// Сопровождать перемещение звуком
// Показывать историю шагов
// Показывать прошлый ход
// Добавить возможность откатить игру на несколько шагов назад
// Залить игру на codesandbox

// Определять мат и выводить сообщение автоматически
// Мат происходит в случаях:
// * Когда нет возможности уйти из под шаха
// * Когда нет возможности срубить фигуру противника. При этом после этого надо сновоа не попасть под шах.
// * Когда нет возможности возможности прикрыться своей фигурой
// * Продумать поведение короля
