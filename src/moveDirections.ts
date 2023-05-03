import { Position } from "./types";

import {
  leftPositions,
  rightPositions,
  upPositions,
  downPositions,
  rightDownPositions,
  leftDownPositions,
  rightUpPositions,
  leftUpPositions,
} from "./directionGenerators";
import { isWithinTheBoard } from "./helpers/isWithinTheBoard";

export const rockDirections = (position: Position): Position[][] => {
  return [
    upPositions(position),
    downPositions(position),
    leftPositions(position),
    rightPositions(position),
  ];
};

export const queenDirections = (position: Position): Position[][] => {
  return [
    upPositions(position),
    downPositions(position),
    leftPositions(position),
    rightPositions(position),
    rightDownPositions(position),
    leftDownPositions(position),
    rightUpPositions(position),
    leftUpPositions(position),
  ];
};

export const kingDirections = (position: Position): Position[][] => {
  return [
    upPositions(position).slice(0, 1),
    downPositions(position).slice(0, 1),
    leftPositions(position).slice(0, 1),
    rightPositions(position).slice(0, 1),
    rightDownPositions(position).slice(0, 1),
    leftDownPositions(position).slice(0, 1),
    rightUpPositions(position).slice(0, 1),
    leftUpPositions(position).slice(0, 1),
  ];
};

export const bishopDirections = (position: Position): Position[][] => {
  return [
    rightDownPositions(position),
    leftDownPositions(position),
    rightUpPositions(position),
    leftUpPositions(position),
  ];
};

export const blackPawnMoveDirections = (position: Position, isMoved: boolean): Position[][] => {
  if (isMoved) {
    return [downPositions(position).slice(0, 1)];
  }
  return [downPositions(position).slice(0, 2)];
};

export const whitePawnMoveDirections = (position: Position, isMoved: boolean): Position[][] => {
  if (isMoved) {
    return [upPositions(position).slice(0, 1)];
  }
  return [upPositions(position).slice(0, 2)];
};

export const blackPawnTakeDirections = (position: Position): Position[][] => {
  return [leftDownPositions(position).slice(0, 1), rightDownPositions(position).slice(0, 1)];
};

export const whitePawnTakeDirections = (position: Position): Position[][] => {
  return [leftUpPositions(position).slice(0, 1), rightUpPositions(position).slice(0, 1)];
};

export const knightDirections = (position: Position): Position[][] => {
  const result = [];

  const step1 = { x: position.x + 1, y: position.y - 2 };
  const step2 = { x: position.x + 2, y: position.y - 1 };
  const step3 = { x: position.x + 2, y: position.y + 1 };
  const step4 = { x: position.x + 1, y: position.y + 2 };
  const step5 = { x: position.x - 1, y: position.y + 2 };
  const step6 = { x: position.x - 2, y: position.y + 1 };
  const step7 = { x: position.x - 2, y: position.y - 1 };
  const step8 = { x: position.x - 1, y: position.y - 2 };

  isWithinTheBoard(step1) && result.push([step1]);
  isWithinTheBoard(step2) && result.push([step2]);
  isWithinTheBoard(step3) && result.push([step3]);
  isWithinTheBoard(step4) && result.push([step4]);
  isWithinTheBoard(step5) && result.push([step5]);
  isWithinTheBoard(step6) && result.push([step6]);
  isWithinTheBoard(step7) && result.push([step7]);
  isWithinTheBoard(step8) && result.push([step8]);

  return result;
};
