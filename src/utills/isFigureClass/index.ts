import { figureClassColorList, figureClassTypeList, FigureClassName } from "../../types";

export const isFigureClass = (className: string): className is FigureClassName => {
  const isRightColor = figureClassColorList.some((v) => v === className[0]);
  const isRightType = figureClassTypeList.some((v) => v === className[1]);
  const isProperLength = className.length === 2;

  return isRightColor && isRightType && isProperLength;
};
