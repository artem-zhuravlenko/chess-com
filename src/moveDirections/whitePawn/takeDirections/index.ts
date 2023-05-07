import { Position } from "../../../Position";
import { leftUpPositions } from "../../../directionGenerators/leftUpPositions";
import { rightUpPositions } from "../../../directionGenerators/rightUpPositions";

export const takeDirections = (position: Position): Position[][] => {
  const leftUpTake = leftUpPositions(position).slice(0, 1);
  const rightUpTake = rightUpPositions(position).slice(0, 1);

  const result: Position[][] = [leftUpTake, rightUpTake].filter((arr) => arr.length > 0);

  return result;
};
