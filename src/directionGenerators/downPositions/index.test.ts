import { Position } from "../../Position";
import { downPositions } from "../downPositions";

describe(downPositions, () => {
  it("Position {x: 1, y: 2}", () => {
    const position = new Position({ x: 1, y: 2 });
    expect(downPositions(position)).toEqual([
      new Position({ x: 1, y: 3 }),
      new Position({ x: 1, y: 4 }),
      new Position({ x: 1, y: 5 }),
      new Position({ x: 1, y: 6 }),
      new Position({ x: 1, y: 7 }),
    ]);
  });

  it("Position {x: 1, y: 7}", () => {
    const position = new Position({ x: 1, y: 7 });

    expect(downPositions(position)).toEqual([]);
  });

  it("Position {x: 1, y: 6}", () => {
    const position = new Position({ x: 1, y: 6 });

    expect(downPositions(position)).toEqual([new Position({ x: 1, y: 7 })]);
  });
});
