import { isWithinTheBoard } from ".";

describe(isWithinTheBoard, () => {
  it("works with {x: 0, y: 0}", () => {
    expect(isWithinTheBoard({ x: 0, y: 0 })).toBe(true);
  });
  it("negative coordinates", () => {
    expect(isWithinTheBoard({ x: 1, y: -1 })).toBe(false);
    expect(isWithinTheBoard({ x: -1, y: -1 })).toBe(false);
    expect(isWithinTheBoard({ x: -1, y: 1 })).toBe(false);
  });
});
