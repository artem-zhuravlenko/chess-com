import { king } from ".";
import { Position } from "../../Position";

describe(king.move, () => {
  it("Should be able to make one step in every direction on board", () => {
    const test1 = {
      input: new Position({ x: 3, y: 0 }),
      expectedResult: [
        [new Position({ x: 2, y: 0 })],
        [new Position({ x: 2, y: 1 })],
        [new Position({ x: 1, y: 0 })],
        [new Position({ x: 1, y: 1 })],
        [new Position({ x: 3, y: 1 })],
      ],
    };

    const test2 = {
      input: new Position({ x: 2, y: 3 }),
      expectedResult: [
        [new Position({ x: 1, y: 2 })],
        [new Position({ x: 2, y: 2 })],
        [new Position({ x: 3, y: 2 })],
        [new Position({ x: 3, y: 3 })],
        [new Position({ x: 3, y: 4 })],
        [new Position({ x: 2, y: 4 })],
        [new Position({ x: 1, y: 4 })],
        [new Position({ x: 1, y: 3 })],
      ],
    };

    const actualResult1 = king.move(test1.input);
    const actualResult2 = king.move(test2.input);

    expect(actualResult1.length).toBe(test1.expectedResult.length);
    expect(actualResult2.length).toBe(test2.expectedResult.length);
  });
});
