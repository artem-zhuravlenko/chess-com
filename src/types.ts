import { Figure } from "./Figure";

export const CELL_IN_ROW = 8;
export const CELL_IN_COL = CELL_IN_ROW;

export const CELL_SIZE_PX = 80;

export const COLOR = {
  black: "black",
  white: "white",
} as const;

export type Color = typeof COLOR[keyof typeof COLOR];

export const FIGURE_TYPE = {
  pawn: "pawn",
  king: "king",
  rook: "rook",
  bishop: "bishop",
  queen: "queen",
  knight: "knight",
} as const;

export type FigureType = typeof FIGURE_TYPE[keyof typeof FIGURE_TYPE];

export type CellIndex = typeof cellIndexList[number];

export const cellIndexList = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export type PositionString = `${CellIndex}:${CellIndex}`;

export const figureClassTypeList = ["b", "k", "n", "p", "q", "r"] as const;

export type FigureClassType = typeof figureClassTypeList[number];

export const figureClassColorList = ["w", "b"] as const;

export type FigureClassColor = typeof figureClassColorList[number];

export type FigureClassName = `${FigureClassColor}${FigureClassType}`;

export type FigurePositionMap = Map<PositionString, Figure>;
