import { queen } from ".";
import { Position } from "../../Position";
// import * as rightPos from "../../directionGenerators/rightPositions";

describe(queen.move, () => {
  it("shold return all positions of 2d array", () => {
    const input = new Position({ x: 1, y: 3 });

    const expectedSubarrayLength = [3, 4, 1, 6, 4, 1, 3, 1];

    // const rightPositionsMock = jest
    //   .fn()
    //   .mockReturnValue([
    //     new Position({ x: 2, y: 3 }),
    //     new Position({ x: 3, y: 3 }),
    //     new Position({ x: 4, y: 3 }),
    //     new Position({ x: 5, y: 3 }),
    //     new Position({ x: 6, y: 3 }),
    //     new Position({ x: 7, y: 3 }),
    //   ]);
    // jest.spyOn(rightPos, "rightPositions").mockImplementation(rightPositionsMock);

    const actualResult = queen.move(input);

    const actualSubarrayLength = actualResult.map((subArr) => subArr.length);

    expect(actualSubarrayLength.length).toBe(expectedSubarrayLength.length);
    expect(actualSubarrayLength).toEqual(expect.arrayContaining(expectedSubarrayLength));
  });

  it("should not return empty directions", () => {
    const input = new Position({ x: 7, y: 3 });
    const expectedSubarrayLength = [3, 4, 4, 7, 3];

    const actualResultSubarrLength = queen.move(input).map((arr) => arr.length);

    expect(actualResultSubarrLength).toEqual(expect.arrayContaining(expectedSubarrayLength));
  });
});
