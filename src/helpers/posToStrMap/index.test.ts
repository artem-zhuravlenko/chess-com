import { posToPosStrMap } from ".";
import { Position } from "../../types";

describe("posToPosStrMap", () => {
  it("should convert an array of Position objects to a Partial<Record<PositionString, true>>", () => {
    const positionList: Position[] = [
      { x: 0, y: 0 },
      { x: 3, y: 7 },
      { x: 3, y: 4 },
    ];

    const expectedResult = {
      "0:0": true,
      "3:7": true,
      "3:4": true,
    };

    expect(posToPosStrMap(positionList)).toEqual(expectedResult);
  });

  it("should return an empty object if the input array is empty", () => {
    expect(posToPosStrMap([])).toEqual({});
  });
});
