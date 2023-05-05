import {
  FigureClassType,
  FIGURE_TYPE,
  FigureType,
  Color,
  FigureClassName,
  FigureClassColor,
  COLOR,
} from "../../types";

export const resolveFigureClassType = (figure: FigureType): FigureClassType => {
  switch (figure) {
    case FIGURE_TYPE.pawn:
      return "p";
    case FIGURE_TYPE.knight:
      return "n";
    case FIGURE_TYPE.bishop:
      return "b";
    case FIGURE_TYPE.rook:
      return "r";
    case FIGURE_TYPE.queen:
      return "q";
    case FIGURE_TYPE.king:
      return "k";
  }
};

export const convertToFigureCSSClass = (color: Color, figure: FigureType): FigureClassName => {
  let part1: FigureClassColor = color === COLOR.white ? "w" : "b";
  let part2: FigureClassType = resolveFigureClassType(figure);

  const className = part1 + part2;

  return className as FigureClassName;
};
