import { Position, CELL_COUNT_IN_ROW } from "./types";

export const rightPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  for (let i = position.x + 1; i < CELL_COUNT_IN_ROW; i++) {
    positions.push({ x: i, y: position.y });
  }
  return positions;
};

export const downPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  for (let i = position.y + 1; i < CELL_COUNT_IN_ROW; i++) {
    positions.push({ x: position.x, y: i });
  }
  return positions;
};

export const leftPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  for (let i = 1; i <= position.x; i++) {
    positions.push({ x: position.x - i, y: position.y });
  }
  return positions;
};

export const upPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  for (let i = position.y - 1; i >= 0; i--) {
    positions.push({ x: position.x, y: i });
  }
  return positions;
};

export const rightDownPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  const minDist = Math.min(
    CELL_COUNT_IN_ROW - position.x,
    CELL_COUNT_IN_ROW - position.y
  );

  for (let i = 1; i < minDist; i++) {
    positions.push({ x: position.x + i, y: position.y + i });
  }

  return positions;
};

export const leftDownPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  const minDist = Math.min(position.x, CELL_COUNT_IN_ROW - position.y);

  for (let i = 1; i <= minDist; i++) {
    positions.push({ x: position.x - i, y: position.y + i });
  }

  return positions;
};

export const rightUpPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  const minDist = Math.min(CELL_COUNT_IN_ROW - position.x, position.y);

  for (let i = 1; i < minDist; i++) {
    positions.push({ x: position.x + i, y: position.y - i });
  }

  return positions;
};

export const leftUpPositions = (position: Position): Position[] => {
  const positions: Position[] = [];

  const minDist = Math.min(position.x, position.y);

  for (let i = 1; i <= minDist; i++) {
    positions.push({ x: position.x - i, y: position.y - i });
  }

  return positions;
};
