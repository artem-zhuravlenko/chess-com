import { Figure } from "./Figure";
import { Position } from "./Position";
import { FIGURE_TYPE, COLOR, PositionString } from "./types";

const defaultFigurePositionArray: Array<[PositionString, Figure]> = [
  [new Position({ x: 0, y: 0 }).toString(), new Figure(FIGURE_TYPE.rook, COLOR.black)],
  [new Position({ x: 1, y: 0 }).toString(), new Figure(FIGURE_TYPE.knight, COLOR.black)],
  [new Position({ x: 2, y: 0 }).toString(), new Figure(FIGURE_TYPE.bishop, COLOR.black)],
  [new Position({ x: 3, y: 0 }).toString(), new Figure(FIGURE_TYPE.queen, COLOR.black)],
  [new Position({ x: 4, y: 0 }).toString(), new Figure(FIGURE_TYPE.king, COLOR.black)],
  [new Position({ x: 5, y: 0 }).toString(), new Figure(FIGURE_TYPE.bishop, COLOR.black)],
  [new Position({ x: 6, y: 0 }).toString(), new Figure(FIGURE_TYPE.knight, COLOR.black)],
  [new Position({ x: 7, y: 0 }).toString(), new Figure(FIGURE_TYPE.rook, COLOR.black)],
  [new Position({ x: 0, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 1, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 2, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 3, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 4, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 5, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 6, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 7, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  [new Position({ x: 0, y: 7 }).toString(), new Figure(FIGURE_TYPE.rook, COLOR.white)],
  [new Position({ x: 1, y: 7 }).toString(), new Figure(FIGURE_TYPE.knight, COLOR.white)],
  [new Position({ x: 2, y: 7 }).toString(), new Figure(FIGURE_TYPE.bishop, COLOR.white)],
  [new Position({ x: 4, y: 7 }).toString(), new Figure(FIGURE_TYPE.king, COLOR.white)],
  [new Position({ x: 3, y: 7 }).toString(), new Figure(FIGURE_TYPE.queen, COLOR.white)],
  [new Position({ x: 5, y: 7 }).toString(), new Figure(FIGURE_TYPE.bishop, COLOR.white)],
  [new Position({ x: 6, y: 7 }).toString(), new Figure(FIGURE_TYPE.knight, COLOR.white)],
  [new Position({ x: 7, y: 7 }).toString(), new Figure(FIGURE_TYPE.rook, COLOR.white)],
  [new Position({ x: 0, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 1, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 2, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 3, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 4, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 5, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 6, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
  [new Position({ x: 7, y: 6 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
];

export const defaultFigurePosition = new Map<PositionString, Figure>(defaultFigurePositionArray);
