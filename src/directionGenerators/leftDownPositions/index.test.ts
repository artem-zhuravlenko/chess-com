import { leftDownPositions } from ".";
import { Position } from "../../Position";

describe(leftDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(leftDownPositions(position)).toEqual([
      new Position({ x: 4, y: 4 }),
      new Position({ x: 3, y: 5 }),
      new Position({ x: 2, y: 6 }),
      new Position({ x: 1, y: 7 }),
    ]);
  });
  it("Position {x: 7, y: 7}", () => {
    const position = new Position({ x: 7, y: 7 });
    expect(leftDownPositions(position)).toEqual([]);
  });
});
