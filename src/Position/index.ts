import { CellIndex, PositionString } from "../types";

export class Position {
  #x: CellIndex;
  #y: CellIndex;

  constructor(position: { x: CellIndex; y: CellIndex }) {
    this.#x = position.x;
    this.#y = position.y;
  }

  get x(): CellIndex {
    return this.#x;
  }

  get y(): CellIndex {
    return this.#y;
  }

  toString(): PositionString {
    return `${this.#x}:${this.#y}`;
  }

  static posStrToObj = (str: PositionString): Position => {
    const x = Number(str[0]) as CellIndex;
    const y = Number(str[2]) as CellIndex;

    const position = new Position({ x, y });

    return position;
  };
}
