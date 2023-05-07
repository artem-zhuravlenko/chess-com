import { bishop } from ".";
import { Position } from "../../Position";

describe("bishopDirections", () => {
  it("Sorted list of subarray lengthes should be equal", () => {
    const testArr = [
      {
        input: new Position({ x: 3, y: 3 }),
        expectedOutput: [
          [
            new Position({ x: 0, y: 0 }),
            new Position({ x: 1, y: 1 }),
            new Position({ x: 2, y: 2 }),
          ],
          [
            new Position({ x: 4, y: 4 }),
            new Position({ x: 5, y: 5 }),
            new Position({ x: 6, y: 6 }),
            new Position({ x: 7, y: 7 }),
          ],
          [
            new Position({ x: 4, y: 2 }),
            new Position({ x: 5, y: 1 }),
            new Position({ x: 7, y: 0 }),
          ],
          [
            new Position({ x: 2, y: 4 }),
            new Position({ x: 1, y: 5 }),
            new Position({ x: 0, y: 6 }),
          ],
        ],
      },
      {
        input: new Position({ x: 7, y: 5 }),
        expectedOutput: [
          [
            new Position({ x: 6, y: 4 }),
            new Position({ x: 5, y: 3 }),
            new Position({ x: 4, y: 2 }),
            new Position({ x: 3, y: 1 }),
            new Position({ x: 2, y: 0 }),
          ],
          [new Position({ x: 6, y: 6 }), new Position({ x: 5, y: 7 })],
        ],
      },
      {
        input: new Position({ x: 3, y: 7 }),
        expectedOutput: [
          [
            new Position({ x: 2, y: 6 }),
            new Position({ x: 1, y: 5 }),
            new Position({ x: 0, y: 4 }),
          ],
          [
            new Position({ x: 4, y: 6 }),
            new Position({ x: 5, y: 5 }),
            new Position({ x: 6, y: 4 }),
            new Position({ x: 7, y: 3 }),
          ],
        ],
      },
    ];

    testArr.forEach((test) => {
      const actualLengthOfSubArrays = bishop.move(test.input)
        .map((arr) => arr.length)
        .sort();

      const expectedLingthOfSubArrays = test.expectedOutput.map((arr) => arr.length).sort();

      expect(actualLengthOfSubArrays).toEqual(expectedLingthOfSubArrays);
    });
  });
  it("Should not add empty sub arrays", () => {
    const actualResult = bishop.move(new Position({ x: 7, y: 2 }));
    const actualResultSubarrLength = actualResult.map((arr) => arr.length);

    expect(actualResultSubarrLength).not.toContain(0);
  });
});
