import {
  CellType,
  CELL_COUNT_IN_ROW,
  Color,
  color,
  FigureType,
  figureType,
  Position
} from "./types";

import { isNil } from "lodash";

export const cellColor = (position: Position): CellType => {
  const isOddX = !!(position.x % 2);
  const isOddY = !!(position.y % 2);

  if ((isOddX && isOddY) || (!isOddX && !isOddY)) {
    return color.white;
  }

  return color.black;
};

export const cellCoordinatesSelector = (
  x: string | number,
  y: string | number
) => {
  return `[data-x="${x}"][data-y="${y}"]`;
};

export const checkWithinTheBoard = (position: Position) => {
  return (
    position.x >= 0 &&
    position.y >= 0 &&
    position.x < CELL_COUNT_IN_ROW &&
    position.y < CELL_COUNT_IN_ROW
  );
};

export const convertToFigureClassName = (
  figureColor: Color,
  fType: FigureType
) => {
  let className = figureColor === color.white ? "w" : "b";

  switch (fType) {
    case figureType.pawn:
      className += "p";
      break;
    case figureType.knight:
      className += "n";
      break;
    case figureType.bishop:
      className += "b";
      break;
    case figureType.rook:
      className += "r";
      break;
    case figureType.queen:
      className += "q";
      break;
    case figureType.king:
      className += "k";
      break;
  }

  return className;
};

export const strToPos = (str: string): Position => {
  if (!/^\d:\d$/.test(str)) {
    throw new Error("String should match regular expressions");
  }

  return {
    x: parseInt(str[0]),
    y: parseInt(str[2])
  };
};

export const posToStr = (position: Position): string => {
  if (isNil(position.x) || isNil(position.y)) {
    throw new Error("Position should not to be 'null' or 'undefined'");
  }

  return `${position.x}:${position.y}`;
};

export const strToNumber = (str: string | undefined | null): number | null => {
  if (isNil(str)) {
    return null;
  }

  const parsedValue = parseInt(str, 10);

  return !isNaN(parsedValue) ? parsedValue : null;
};
