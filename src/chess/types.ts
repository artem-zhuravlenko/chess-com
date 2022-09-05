export const color = {
  black: "black",
  white: "white"
} as const;

export type Color = typeof color[keyof typeof color];

export const figureType = {
  pawn: "pawn",
  king: "king",
  rook: "rook",
  bishop: "bishop",
  queen: "queen",
  knight: "knight"
} as const;

export type FigureType = typeof figureType[keyof typeof figureType];

export type CellType = typeof color[keyof typeof color];

export const blackFigureClassName = {
  bp: "bp",
  bb: "bb",
  bk: "bk",
  br: "br",
  bn: "bn",
  bq: "bq"
} as const;

export type BlackFigureClassName = typeof blackFigureClassName[keyof typeof blackFigureClassName];

export const whiteFigureClassName = {
  wp: "wp",
  wb: "wb",
  wk: "wk",
  wr: "wr",
  wn: "wn",
  wq: "wq"
} as const;

export type WhiteFigureClassName = typeof whiteFigureClassName[keyof typeof whiteFigureClassName];

type FigureNameTranslator = {
  [F in FigureType]: string;
};

export const figureNameTranslator: FigureNameTranslator = {
  [figureType.pawn]: "пешка",
  [figureType.bishop]: "слон",
  [figureType.king]: "король",
  [figureType.rook]: "ладья",
  [figureType.knight]: "конь",
  [figureType.queen]: "ферзь"
};

type BlackFigureNameBackwardsTranslator = {
  [key: string]: BlackFigureClassName;
};

const swapKeyAndVal = (obj: any) => {
  const resultObject: any = {};

  Object.keys(obj).forEach((key) => {
    resultObject[obj[key]] = key;
  });
  return resultObject;
};

export const figureNameBackwardsTranslator: BlackFigureNameBackwardsTranslator = swapKeyAndVal(
  figureNameTranslator
);

export type FiguresOfAllColors = WhiteFigureClassName | BlackFigureClassName;

export interface Position {
  x: number;
  y: number;
}

export interface PositionNullable {
  x: number | null;
  y: number | null;
}

export const CELL_COUNT_IN_ROW = 8;
export const CELL_WIDTH_PX = 80;
