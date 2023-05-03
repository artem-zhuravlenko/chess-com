import { Position, PositionString } from "../../types";

export const posToPosStr = (position: Position): PositionString => {
  return `${position.x}:${position.y}`;
};
