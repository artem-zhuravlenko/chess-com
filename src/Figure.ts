import { PositionString, Color, FigureType } from "./types";

export class Figure {
  isMoved: boolean;
  type: FigureType;
  availableMoves: Set<PositionString>;
  availableTakes: Set<PositionString>;
  readonly color: Color;

  constructor(figureType: FigureType, color: Color) {
    this.isMoved = false;
    this.type = figureType;
    this.color = color;
    this.availableMoves = new Set();
    this.availableTakes = new Set();
  }
}
