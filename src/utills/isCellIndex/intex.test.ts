import { isCellIndex } from "./index";

describe(isCellIndex, () => {
  it("in range values", () => {
    for (let i = 0; i <= 7; i++) {
      expect(isCellIndex(i)).toBe(true);
    }
  });
  it("out range values", () => {
    expect(isCellIndex(-100)).toBe(false);
    expect(isCellIndex(-1)).toBe(false);
    expect(isCellIndex(8)).toBe(false);
    expect(isCellIndex(100)).toBe(false);
  });
});
