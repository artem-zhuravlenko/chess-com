import {isNil} from "lodash";
import { Position, Color, color, figureType } from "./types";
import { checkWithinTheBoard, posToStr, strToPos } from "./utils";
import { Figure } from "./Figures";
import {
  whitePawnMoveDirections,
  blackPawnMoveDirections,
  whitePawnTakeDirections,
  blackPawnTakeDirections,
  knightDirections,
  bishopDirections,
  rockDirections,
  queenDirections,
  kingDirections
} from "./moveDirections";


export class Model {
  selectedCell: {
    position: Position;
  } | null;
  onModelChange: (model: Model) => void;
  currentTurn: Color;
  figures: { [key: string]: Figure };

  constructor() {
    this.selectedCell = null;
    this.currentTurn = color.white;
    this.onModelChange = () => {}
    this.figures = {
      [posToStr({ x: 0, y: 0 })]: new Figure(figureType.rook, color.black),
      [posToStr({ x: 1, y: 0 })]: new Figure(figureType.bishop, color.black),
      [posToStr({ x: 2, y: 0 })]: new Figure(figureType.knight, color.black),
      [posToStr({ x: 3, y: 0 })]: new Figure(figureType.king, color.black),
      [posToStr({ x: 4, y: 0 })]: new Figure(figureType.queen, color.black),
      [posToStr({ x: 5, y: 0 })]: new Figure(figureType.knight, color.black),
      [posToStr({ x: 6, y: 0 })]: new Figure(figureType.bishop, color.black),
      [posToStr({ x: 7, y: 0 })]: new Figure(figureType.rook, color.black),
      [posToStr({ x: 0, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 1, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 2, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 3, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 4, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 5, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 6, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 7, y: 1 })]: new Figure(figureType.pawn, color.black),
      [posToStr({ x: 0, y: 7 })]: new Figure(figureType.rook, color.white),
      [posToStr({ x: 1, y: 7 })]: new Figure(figureType.bishop, color.white),
      [posToStr({ x: 2, y: 7 })]: new Figure(figureType.knight, color.white),
      [posToStr({ x: 3, y: 7 })]: new Figure(figureType.queen, color.white),
      [posToStr({ x: 4, y: 7 })]: new Figure(figureType.king, color.white),
      [posToStr({ x: 5, y: 7 })]: new Figure(figureType.knight, color.white),
      [posToStr({ x: 6, y: 7 })]: new Figure(figureType.bishop, color.white),
      [posToStr({ x: 7, y: 7 })]: new Figure(figureType.rook, color.white),
      [posToStr({ x: 0, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 1, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 2, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 3, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 4, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 5, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 6, y: 6 })]: new Figure(figureType.pawn, color.white),
      [posToStr({ x: 7, y: 6 })]: new Figure(figureType.pawn, color.white)
    };
  }

  private toggleTurn() {
    this.currentTurn =
      this.currentTurn === color.white ? color.black : color.white;
  }

  public getFigure(position: Position): Figure | null {
    return this.figures[posToStr(position)] ?? null;
  }

  private basicMoveCheck(position: Position): boolean {
    const withinTheBoard = checkWithinTheBoard(position);
    const isCellFree = isNil(this.getFigure(position));

    return withinTheBoard && isCellFree;
  }

  private kingMoveCheck(position: Position): boolean {
    // TODO ADD CHECK FOR KING
    return this.basicMoveCheck(position);
  }

  private static updateAvailableMoves(
    figure: Figure,
    directions: Position[][],
    checkCallback: (position: Position) => boolean
  ): void {
    figure.availableMoves = [];

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];

        if (checkCallback(position)) {
          figure.availableMoves.push(position);
        } else {
          break;
        }
      }
    }
  }

  private updateAvailableTakes(figure: Figure, directions: Position[][]): void {
    figure.availableTakes = [];

    for (let i = 0; i < directions.length; i++) {
      for (let j = 0; j < directions[i].length; j++) {
        const position = directions[i][j];
        const figureOnTheWay = this.figures[posToStr(position)];
        if (isNil(figureOnTheWay)) continue;

        const isEnemyOnTheWay = figureOnTheWay.color !== figure.color;

        if (isEnemyOnTheWay) {
          figure.availableTakes.push(position);
        }
        break;
      }
    }
  }

  public updateFieldState(): void {
    Object.keys(this.figures).forEach((posStr) => {
      const figure = this.figures[posStr];
      const figurePosition = strToPos(posStr);
      switch (figure.figureType) {
        case figureType.pawn:
          if (figure.color === color.white) {
            Model.updateAvailableMoves(
              figure,
              whitePawnMoveDirections(figurePosition, figure.isMoved),
              this.basicMoveCheck.bind(this)
            );
            this.updateAvailableTakes(
              figure,
              whitePawnTakeDirections(figurePosition)
            );
          } else {
            Model.updateAvailableMoves(
              figure,
              blackPawnMoveDirections(figurePosition, figure.isMoved),
              this.basicMoveCheck.bind(this)
            );
            this.updateAvailableTakes(
              figure,
              blackPawnTakeDirections(figurePosition)
            );
          }
          break;
        case figureType.knight:
          Model.updateAvailableMoves(
            figure,
            knightDirections(figurePosition),
            this.basicMoveCheck.bind(this)
          );
          this.updateAvailableTakes(figure, knightDirections(figurePosition));
          break;
        case figureType.rook:
          Model.updateAvailableMoves(
            figure,
            rockDirections(figurePosition),
            this.basicMoveCheck.bind(this)
          );
          this.updateAvailableTakes(figure, rockDirections(figurePosition));
          break;
        case figureType.bishop:
          Model.updateAvailableMoves(
            figure,
            bishopDirections(figurePosition),
            this.basicMoveCheck.bind(this)
          );
          this.updateAvailableTakes(figure, bishopDirections(figurePosition));
          break;
        case figureType.queen:
          Model.updateAvailableMoves(
            figure,
            queenDirections(figurePosition),
            this.basicMoveCheck.bind(this)
          );
          this.updateAvailableTakes(figure, queenDirections(figurePosition));
          break;
        case figureType.king:
          Model.updateAvailableMoves(
            figure,
            kingDirections(figurePosition),
            this.kingMoveCheck.bind(this)
          );
          this.updateAvailableTakes(figure, kingDirections(figurePosition));
          break;
      }
    });
  }

  public bindModelChange(callback: (model: Model) => void): void {
    this.onModelChange = callback;
  }

  private commitChanges(model: Model): void {
    this.onModelChange(model);
  }

  public selectFigure({ x, y }: Position): void {
    const selectedFigure = this.getFigure({ x, y });

    if (!selectedFigure) return;

    if (selectedFigure.color !== this.currentTurn) return;

    this.selectedCell = {
      position: { x, y }
    };

    this.commitChanges(this);
  }

  private tryMoveFigure(
    positionFrom: Position,
    positionTo: Position
  ): void {
    const positionFromFigure = this.getFigure(positionFrom);
    const positionToFigure = this.getFigure(positionTo);

    if (isNil(positionFromFigure)) return;
    if (!isNil(positionToFigure)) return;

    const isAvailableToMove = positionFromFigure.availableMoves.some((move) => {
      return move.x === positionTo.x && move.y === positionTo.y;
    });

    if (!isAvailableToMove) return;

    this.figures[posToStr(positionTo)] = this.figures[posToStr(positionFrom)];
    delete this.figures[posToStr(positionFrom)];

    positionFromFigure.isMoved = true;
    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges(this);
  }

  private tryTakeFigure(
    positionFrom: Position,
    positionTo: Position
  ): void {
    const positionFromFigure = this.getFigure(positionFrom);
    const positionToFigure = this.getFigure(positionTo);

    if (isNil(positionFromFigure)) return;
    if (isNil(positionToFigure)) return;
    if (positionFromFigure.color === positionToFigure.color) return;

    const isAvailableToTake = !positionFromFigure.availableTakes.some(
      (take) => take.x === positionTo.x || take.y === positionTo.y
    );

    if (isAvailableToTake) return;

    this.figures[posToStr(positionTo)] = this.figures[posToStr(positionFrom)];
    delete this.figures[posToStr(positionFrom)];

    positionFromFigure.isMoved = true;
    this.toggleTurn();
    this.updateFieldState();

    this.commitChanges(this);
  }

  public figureControl(positionFrom: Position, positionTo: Position): void {
    if (!this.selectedCell) return;
    const selectedFigure = this.getFigure(this.selectedCell.position);

    if (isNil(selectedFigure)) return;

    this.tryMoveFigure(positionFrom, positionTo);
    this.tryTakeFigure(positionFrom, positionTo);
  }
}

// TODO
// Определять пат
// Под шахом, давать возможность делать только те действия, которые выводят из шаха
// Сделать возможность рубить в проходе
// Показывать прошлый ход
// Добавить возможность ракеровки
// Вести учет срубленых фигур

// Определять мат и выводить сообщение автоматически
// Мат происходит в случаях:
// * Когда нет возможности уйти из под шаха
// * Когда нет возможности срубить фигуру противника. При этом после этого надо сновоа не попасть под шах.
// * Когда нет возможности возможности прикрыться своей фигурой
// * Продумать поведение короля

