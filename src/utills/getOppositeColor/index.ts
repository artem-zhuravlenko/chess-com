import {COLOR, Color} from "../../types";

export const getOppositeColor = (color: Color) => {
  return color === COLOR.white ? COLOR.black : COLOR.white;
};