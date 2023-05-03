import { posToPosStr } from ".";

describe("posToPosStr", () => {
  it("return right thing", () => {
    expect(posToPosStr({ x: 0, y: 1 })).toBe("0:1");
  });
});
