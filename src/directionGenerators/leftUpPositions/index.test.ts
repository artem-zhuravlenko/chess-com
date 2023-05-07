import { Position } from "../../Position";
import { leftUpPositions } from "../leftUpPositions";

describe(leftUpPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(leftUpPositions(position)).toEqual([
      new Position({ x: 4, y: 2 }),
      new Position({ x: 3, y: 1 }),
      new Position({ x: 2, y: 0 }),
    ]);
  });

  it("Position {x: 0, y: 0}", () => {
    const position = new Position({ x: 0, y: 0 });
    expect(leftUpPositions(position)).toEqual([]);
  });
});
