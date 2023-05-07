import { moveDirections } from ".";
import { Position } from "../../../Position";

describe(moveDirections, () => {
  it("should return 2 setps if pawn not moved", () => {
    const actualResult = moveDirections(new Position({ x: 3, y: 6 }), false);

    expect(actualResult[0].length).toBe(2);
  });

  it("should return 1 setps if pawn moved", () => {
    const actualResult = moveDirections(new Position({ x: 4, y: 6 }), true);

    expect(actualResult[0].length).toBe(1);
  });

  it("should return [] at the end of the line", () => {
    const actualResult = moveDirections(new Position({ x: 5, y: 0 }), false);
    expect(actualResult).toEqual([]);
  });
});
