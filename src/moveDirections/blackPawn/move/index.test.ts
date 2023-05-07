import { move } from ".";
import { Position } from "../../../Position";

describe("blackPawnMoveDirections", () => {
  it("should return 2 setps if pawn not moved", () => {
    const actualResult = move(new Position({ x: 3, y: 1 }), false);

    expect(actualResult[0].length).toBe(2);
  });

  it("should return 1 setps if pawn moved", () => {
    const actualResult = move(new Position({ x: 3, y: 1 }), true);

    expect(actualResult[0].length).toBe(1);
  });

  it("should return [] at the end of the line", () => {
    const actualResult = move(new Position({ x: 3, y: 7 }), false);
    expect(actualResult).toEqual([]);
  });
});
