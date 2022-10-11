export const color = {
  black: "black",
  white: "white",
} as const;

export type Color = typeof color[keyof typeof color];

export const figureType = {
  pawn: "pawn",
  king: "king",
  rook: "rook",
  bishop: "bishop",
  queen: "queen",
  knight: "knight",
} as const;

export type FigureType = typeof figureType[keyof typeof figureType];

export type CellType = typeof color[keyof typeof color];

export interface Position {
  x: number;
  y: number;
}

export const CELL_COUNT_IN_ROW = 8;
export const CELL_WIDTH_PX = 80;
