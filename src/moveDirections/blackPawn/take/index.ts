import { Position } from "../../../Position";
import { rightDownPositions } from "../../../directionGenerators/rightDownPositions";
import { leftDownPositions } from "../../../directionGenerators/leftDownPositions";

export const take = (position: Position): Position[][] => {
  const leftDownTake = leftDownPositions(position).slice(0, 1);
  const rightDownTake = rightDownPositions(position).slice(0, 1);

  const result: Position[][] = [leftDownTake, rightDownTake].filter((arr) => arr.length > 0);

  return result;
};
