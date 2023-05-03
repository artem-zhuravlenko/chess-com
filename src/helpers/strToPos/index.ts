import { PositionString, Position, CellIndex } from "../../types";

export const strToPos = (str: PositionString): Position => {
  const x = Number(str[0]) as CellIndex;
  const y = Number(str[2]) as CellIndex;

  return {
    x,
    y,
  };
};
