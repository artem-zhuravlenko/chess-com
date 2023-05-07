import { isFigureClass } from ".";

describe(isFigureClass, () => {
  it("Should return check css class names for figure", () => {
    expect(isFigureClass("bk")).toBe(true);
    expect(isFigureClass("wn")).toBe(true);
    expect(isFigureClass("bp")).toBe(true);
    expect(isFigureClass("bs")).toBe(false);
    expect(isFigureClass("gb")).toBe(false);
    expect(isFigureClass("b k")).toBe(false);
    expect(isFigureClass("p")).toBe(false);
    expect(isFigureClass("b")).toBe(false);
    expect(isFigureClass("n")).toBe(false);
  });
});
