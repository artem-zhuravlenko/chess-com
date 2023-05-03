import { cellColor } from ".";

describe(cellColor, () => {
  it("basic", () => {
    expect(cellColor({ x: 0, y: 0 })).toBe("white");
    expect(cellColor({ x: 1, y: 0 })).toBe("black");
    expect(cellColor({ x: 0, y: 1 })).toBe("black");
    expect(cellColor({ x: 0, y: 0 })).toBe("white");
    expect(cellColor({ x: 7, y: 7 })).toBe("white");
  });
});
