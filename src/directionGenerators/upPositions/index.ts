import { Position } from "../../Position";
import { isWithinTheBoard } from "../../utills/isWithinTheBoard";

export const upPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  for (let i = position.y - 1; i >= 0; i--) {
    //@ts-expect-error
    const pos = new Position({ x: position.x, y: i });

    if (isWithinTheBoard(pos)) {
      positions.push(pos);
    }
  }
  return positions;
};
