import { takeDirections } from ".";
import { Position } from "../../../Position";

describe(takeDirections, () => {
  it("Should have left-forward and right-forward takes", () => {
    const result = takeDirections(new Position({ x: 4, y: 6 }));

    expect(result.length).toBe(2);
  });

  it("Should have only 1 take near to left and right cornders", () => {
    const actualResult1 = takeDirections(new Position({ x: 7, y: 4 }));
    const actualResult2 = takeDirections(new Position({ x: 0, y: 6 }));

    expect(actualResult1.length).toBe(1);
    expect(actualResult2.length).toBe(1);
  });

  it("Shouldn't have any takes at forward corner", () => {
    const actualResult1 = takeDirections(new Position({ x: 2, y: 0 }));
    const actualResult2 = takeDirections(new Position({ x: 3, y: 0 }));

    expect(actualResult1.length).toBe(0);
    expect(actualResult2.length).toBe(0);
  });
});
