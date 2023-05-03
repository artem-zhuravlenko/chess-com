import { Position } from "../../types";
import { CELL_IN_ROW } from "../../types";

export const isWithinTheBoard = (position: Position<number>): position is Position => {
  return position.x >= 0 && position.y >= 0 && position.x < CELL_IN_ROW && position.y < CELL_IN_ROW;
};
