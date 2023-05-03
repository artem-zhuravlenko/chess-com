import { CellIndex } from "../../types";

export const isCellIndex = (value: number): value is CellIndex => {
  return value >= 0 && value <= 7;
};
