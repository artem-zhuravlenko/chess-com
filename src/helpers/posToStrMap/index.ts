import { Position, PositionString } from "../../types";
import { posToPosStr } from "../posToStr";

export const posToPosStrMap = (positionList: Position[]): Partial<Record<PositionString, true>> => {
  const result: Partial<Record<PositionString, true>> = {};

  positionList.forEach((position) => {
    const positionStr = posToPosStr(position);

    result[positionStr] = true;
  });

  return result;
};
