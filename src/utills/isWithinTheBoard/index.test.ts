import { isWithinTheBoard } from ".";
import { Position } from "../../Position";

describe(isWithinTheBoard, () => {
  it("Should return true, if position is within the chess board", () => {
    const testList = [
      {
        position: new Position({ x: 0, y: 0 }),
        result: true,
      },
      {
        position: new Position({ x: 3, y: 0 }),
        result: true,
      },
      {
        position: new Position({ x: 0, y: 4 }),
        result: true,
      },
    ];

    testList.forEach((test) => {
      expect(isWithinTheBoard(test.position)).toBe(test.result);
    });
  });
});
