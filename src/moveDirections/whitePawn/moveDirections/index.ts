import { Position } from "../../../Position";
import { upPositions } from "../../../directionGenerators/upPositions";

export const moveDirections = (position: Position, isMoved: boolean): Position[][] => {
  const sliceTo = isMoved ? 1 : 2;

  return [upPositions(position).slice(0, sliceTo)].filter((arr) => arr.length > 0);
};
