import { isWithinTheBoard } from ".";
import { Position } from "../../Position";

describe(isWithinTheBoard, () => {
  it("works with {x: 0, y: 0}", () => {
    const position = new Position({ x: 0, y: 0 });

    expect(isWithinTheBoard(position)).toBe(true);
  });
});
