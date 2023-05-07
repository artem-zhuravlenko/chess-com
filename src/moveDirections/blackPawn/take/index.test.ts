import { take } from ".";
import { Position } from "../../../Position";

describe("blackPawnTakeDirections", () => {
  it("Should have left-forward and right-forward takes", () => {
    const result = take(new Position({ x: 4, y: 2 }));

    expect(result.length).toBe(2);
  });

  it("Should have only 1 take near to left and right cornders", () => {
    const actualResult1 = take(new Position({ x: 7, y: 4 }));
    const actualResult2 = take(new Position({ x: 0, y: 6 }));

    expect(actualResult1.length).toBe(1);
    expect(actualResult2.length).toBe(1);
  });

  it("Shouldn't have takes at forward corner", () => {
    const actualResult1 = take(new Position({ x: 0, y: 7 }));
    const actualResult2 = take(new Position({ x: 4, y: 7 }));

    expect(actualResult1.length).toBe(0);
    expect(actualResult2.length).toBe(0);
  });
});
