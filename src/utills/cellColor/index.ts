import { Color, COLOR } from "../../types";
import { Position } from "../../Position";

export const cellColor = (position: Position): Color => {
  const isOddX = !!(position.x % 2);
  const isOddY = !!(position.y % 2);

  if ((isOddX && isOddY) || (!isOddX && !isOddY)) {
    return COLOR.white;
  }

  return COLOR.black;
};
