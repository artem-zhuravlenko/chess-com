import { rock } from ".";
import { Position } from "../../Position";

describe(rock.move, () => {
  it("", () => {
    const expectedSubarrayLength = [5, 4, 2, 3];

    const actualResult = rock.move(new Position({ x: 3, y: 5 }));

    const actualResultSubarrLength = actualResult.map((subArr) => subArr.length);

    expect(expectedSubarrayLength).toEqual(expect.arrayContaining(actualResultSubarrLength));
    expect(actualResultSubarrLength).toEqual(expect.arrayContaining(expectedSubarrayLength));
  });

  it("should don't have any empty sub arrays", () => {
    const expectedSubarrayLength = [2, 5, 7];

    const actualResult = rock.move(new Position({ x: 7, y: 2 }));

    const actualResultSubarrLength = actualResult.map((subArr) => subArr.length);

    expect(expectedSubarrayLength).toEqual(expect.arrayContaining(actualResultSubarrLength));
    expect(actualResultSubarrLength).toEqual(expect.arrayContaining(expectedSubarrayLength));
  });
});
