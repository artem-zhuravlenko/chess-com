import { Position, Color, FigureType } from "./types";

export class Figure {
  isMoved: boolean;
  color: Color;
  figureType: FigureType;
  availableMoves: Position[];
  availableTakes: Position[];
  constructor(figureType: FigureType, color: Color) {
    this.figureType = figureType;
    this.color = color;
    this.availableMoves = [];
    this.availableTakes = [];
  }
}

export class Cell {
  figure: Figure;
  isSelected: boolean;
  setSelected: (isSelected: boolean) => {};
  isAvailableToMoveForSelectedFigure: boolean;
  isAvailableToTakeForSelectedFigure: boolean;
  constructor(figure: Figure) {
    this.figure = figure;
    this.isSelected = false;
  }
}
