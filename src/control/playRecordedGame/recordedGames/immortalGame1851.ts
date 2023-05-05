import { Position } from "../../../Position";

interface MoveCoordinates {
  positionFrom: Pick<Position, "x" | "y">;
  positionTo: Pick<Position, "x" | "y">;
}

const _immortalGame1851: MoveCoordinates[] = [
  {
    positionFrom: {
      x: 4,
      y: 6,
    },
    positionTo: {
      x: 4,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 4,
      y: 1,
    },
    positionTo: {
      x: 4,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 6,
    },
    positionTo: {
      x: 5,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 4,
      y: 3,
    },
    positionTo: {
      x: 5,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 7,
    },
    positionTo: {
      x: 2,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 3,
      y: 0,
    },
    positionTo: {
      x: 7,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 4,
      y: 7,
    },
    positionTo: {
      x: 5,
      y: 7,
    },
  },
  {
    positionFrom: {
      x: 1,
      y: 1,
    },
    positionTo: {
      x: 1,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 4,
    },
    positionTo: {
      x: 1,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 0,
    },
    positionTo: {
      x: 5,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 7,
    },
    positionTo: {
      x: 5,
      y: 5,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 4,
    },
    positionTo: {
      x: 7,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 3,
      y: 6,
    },
    positionTo: {
      x: 3,
      y: 5,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 2,
    },
    positionTo: {
      x: 7,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 5,
    },
    positionTo: {
      x: 7,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 2,
    },
    positionTo: {
      x: 6,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 4,
    },
    positionTo: {
      x: 5,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 1,
    },
    positionTo: {
      x: 2,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 6,
    },
    positionTo: {
      x: 6,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 3,
    },
    positionTo: {
      x: 5,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 7,
    },
    positionTo: {
      x: 6,
      y: 7,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 2,
    },
    positionTo: {
      x: 1,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 6,
    },
    positionTo: {
      x: 7,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 3,
    },
    positionTo: {
      x: 6,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 7,
      y: 4,
    },
    positionTo: {
      x: 7,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 2,
    },
    positionTo: {
      x: 6,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 3,
      y: 7,
    },
    positionTo: {
      x: 5,
      y: 5,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 2,
    },
    positionTo: {
      x: 6,
      y: 0,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 7,
    },
    positionTo: {
      x: 5,
      y: 4,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 3,
    },
    positionTo: {
      x: 5,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 1,
      y: 7,
    },
    positionTo: {
      x: 2,
      y: 5,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 0,
    },
    positionTo: {
      x: 2,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 5,
    },
    positionTo: {
      x: 3,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 2,
    },
    positionTo: {
      x: 1,
      y: 6,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 4,
    },
    positionTo: {
      x: 3,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 2,
      y: 3,
    },
    positionTo: {
      x: 6,
      y: 7,
    },
  },
  {
    positionFrom: {
      x: 4,
      y: 4,
    },
    positionTo: {
      x: 4,
      y: 3,
    },
  },
  {
    positionFrom: {
      x: 1,
      y: 6,
    },
    positionTo: {
      x: 0,
      y: 7,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 7,
    },
    positionTo: {
      x: 4,
      y: 6,
    },
  },
  {
    positionFrom: {
      x: 1,
      y: 0,
    },
    positionTo: {
      x: 0,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 3,
    },
    positionTo: {
      x: 6,
      y: 1,
    },
  },
  {
    positionFrom: {
      x: 4,
      y: 0,
    },
    positionTo: {
      x: 3,
      y: 0,
    },
  },
  {
    positionFrom: {
      x: 5,
      y: 5,
    },
    positionTo: {
      x: 5,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 6,
      y: 0,
    },
    positionTo: {
      x: 5,
      y: 2,
    },
  },
  {
    positionFrom: {
      x: 3,
      y: 2,
    },
    positionTo: {
      x: 4,
      y: 1,
    },
  },
];

export const immortalGame1851 = _immortalGame1851.map((pos) => ({
  positionFrom: new Position(pos.positionFrom),
  positionTo: new Position(pos.positionTo),
}));
