import { Position } from "../../../Position";
import { downPositions } from "../../../directionGenerators/downPositions";

export const move = (position: Position, isMoved: boolean): Position[][] => {
  const sliceTo = isMoved ? 1 : 2;

  return [downPositions(position).slice(0, sliceTo)].filter((arr) => arr.length > 0);
};
