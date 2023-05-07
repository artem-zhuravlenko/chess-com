import { Position } from "../../Position";
import { leftPositions } from "../leftPositions";

describe(leftPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    const position = new Position({ x: 4, y: 3 });
    expect(leftPositions(position)).toEqual([
      new Position({ x: 3, y: 3 }),
      new Position({ x: 2, y: 3 }),
      new Position({ x: 1, y: 3 }),
      new Position({ x: 0, y: 3 }),
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    const position = new Position({ x: 0, y: 3 });
    expect(leftPositions(position)).toEqual([]);
  });
});
