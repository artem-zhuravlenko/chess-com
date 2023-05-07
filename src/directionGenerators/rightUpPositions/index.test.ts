import { Position } from "../../Position";
import { rightUpPositions } from "../rightUpPositions";

describe(rightUpPositions, () => {
  const position = new Position({ x: 5, y: 3 });
  it("Position {x: 5, y: 3}", () => {
    expect(rightUpPositions(position)).toEqual([
      new Position({ x: 6, y: 2 }),
      new Position({ x: 7, y: 1 }),
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    const position = new Position({ x: 4, y: 2 });
    expect(rightUpPositions(position)).toEqual([
      new Position({ x: 5, y: 1 }),
      new Position({ x: 6, y: 0 }),
    ]);
  });
});
