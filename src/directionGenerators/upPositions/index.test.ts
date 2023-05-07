import { Position } from "../../Position";
import { upPositions } from "../upPositions";

describe(upPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    const position = new Position({ x: 4, y: 3 });
    expect(upPositions(position)).toEqual([
      new Position({ x: 4, y: 2 }),
      new Position({ x: 4, y: 1 }),
      new Position({ x: 4, y: 0 }),
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    const position = new Position({ x: 0, y: 3 });
    expect(upPositions(position)).toEqual([
      new Position({ x: 0, y: 2 }),
      new Position({ x: 0, y: 1 }),
      new Position({ x: 0, y: 0 }),
    ]);
  });
});
