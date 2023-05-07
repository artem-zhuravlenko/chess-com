import { Position } from "../../Position";
import { rightDownPositions } from "../rightDownPositions";

describe(rightDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(rightDownPositions(position)).toEqual([
      new Position({ x: 6, y: 4 }),
      new Position({ x: 7, y: 5 }),
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    const position = new Position({ x: 4, y: 2 });
    expect(rightDownPositions(position)).toEqual([
      new Position({ x: 5, y: 3 }),
      new Position({ x: 6, y: 4 }),
      new Position({ x: 7, y: 5 }),
    ]);
  });

  it("Position {x: 7, y: 2}", () => {
    const position = new Position({ x: 7, y: 2 });
    expect(rightDownPositions(position)).toEqual([]);
  });

  it("Position {x: 3, y: 7}", () => {
    const position = new Position({ x: 3, y: 7 });
    expect(rightDownPositions(position)).toEqual([]);
  });
  it("Position {x: 7, y: 7}", () => {
    const position = new Position({ x: 7, y: 7 });
    expect(rightDownPositions(position)).toEqual([]);
  });
});
