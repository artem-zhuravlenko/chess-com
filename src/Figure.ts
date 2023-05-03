import { Position, Color, FigureType } from "./types";

export class Figure {
  isMoved: boolean;
  type: FigureType;
  availableMoves: Position[];
  availableTakes: Position[];
  readonly color: Color;

  constructor(figureType: FigureType, color: Color) {
    this.isMoved = false;
    this.type = figureType;
    this.color = color;
    this.availableMoves = [];
    this.availableTakes = [];
  }
}
