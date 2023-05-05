import { Position } from "../../Position";
import { cellColor } from ".";

describe(cellColor, () => {
  const position1 = new Position({ x: 0, y: 0 });
  const position2 = new Position({ x: 1, y: 0 });
  const position3 = new Position({ x: 0, y: 1 });
  const position4 = new Position({ x: 0, y: 0 });
  const position5 = new Position({ x: 7, y: 7 });

  it("should return right color", () => {
    expect(cellColor(position1)).toBe("white");
    expect(cellColor(position2)).toBe("black");
    expect(cellColor(position3)).toBe("black");
    expect(cellColor(position4)).toBe("white");
    expect(cellColor(position5)).toBe("white");
  });
});
