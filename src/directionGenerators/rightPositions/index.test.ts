import { Position } from "../../Position";
import { rightPositions } from "../rightPositions";
describe(rightPositions, () => {
  it("Position {x: 0, y: 0}", () => {
    const position = new Position({ x: 0, y: 0 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 1, y: 0 }),
      new Position({ x: 2, y: 0 }),
      new Position({ x: 3, y: 0 }),
      new Position({ x: 4, y: 0 }),
      new Position({ x: 5, y: 0 }),
      new Position({ x: 6, y: 0 }),
      new Position({ x: 7, y: 0 }),
    ]);
  });

  it("Position {x: 3, y: 0}", () => {
    const position = new Position({ x: 3, y: 0 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 4, y: 0 }),
      new Position({ x: 5, y: 0 }),
      new Position({ x: 6, y: 0 }),
      new Position({ x: 7, y: 0 }),
    ]);
  });

  it("Position {x: 7, y: 0}", () => {
    const position = new Position({ x: 7, y: 0 });
    expect(rightPositions(position)).toEqual([]);
  });

  it("Position {x: 0, y: 7}", () => {
    const position = new Position({ x: 0, y: 7 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 1, y: 7 }),
      new Position({ x: 2, y: 7 }),
      new Position({ x: 3, y: 7 }),
      new Position({ x: 4, y: 7 }),
      new Position({ x: 5, y: 7 }),
      new Position({ x: 6, y: 7 }),
      new Position({ x: 7, y: 7 }),
    ]);
  });
});
