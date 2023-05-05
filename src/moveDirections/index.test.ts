import { rockDirections } from ".";
import { Position } from "../Position";

describe("moveDirections", () => {
  it("rockDirections", () => {
    const result = rockDirections(new Position({ x: 7, y: 2 }));

    expect(result).toEqual([]);
  });
});
