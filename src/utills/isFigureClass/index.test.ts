import { isFigureClass } from ".";

describe(isFigureClass, () => {
  it("valid", () => {
    expect(isFigureClass("bk")).toBe(true);
    expect(isFigureClass("wn")).toBe(true);
    expect(isFigureClass("bp")).toBe(true);
  });
  it("invalid", () => {
    expect(isFigureClass("bs")).toBe(false);
    expect(isFigureClass("gb")).toBe(false);
    expect(isFigureClass("b k")).toBe(false);
    expect(isFigureClass("p")).toBe(false);
    expect(isFigureClass("b")).toBe(false);
    expect(isFigureClass("n")).toBe(false);
  });
});
