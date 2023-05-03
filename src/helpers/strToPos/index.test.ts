import { strToPos } from ".";

describe("strToPos", () => {
  it("should convert a valid PositionString to a Position", () => {
    expect(strToPos("0:0")).toEqual({ x: 0, y: 0 });
    expect(strToPos("3:7")).toEqual({ x: 3, y: 7 });
  });
});
