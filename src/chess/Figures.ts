import { Position, Color, FigureType } from "./types";

export class Figure {
  isMoved: boolean;
  color: Color;
  figureType: FigureType;
  availableMoves: Position[];
  availableTakes: Position[];
  constructor(figureType: FigureType, color: Color) {
    this.isMoved = false;
    this.figureType = figureType;
    this.color = color;
    this.availableMoves = [];
    this.availableTakes = [];
  }
}
