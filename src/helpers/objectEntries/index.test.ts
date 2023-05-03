import { objectEntries } from ".";

describe(objectEntries, () => {
  it("empty object", () => {
    expect(objectEntries({})).toEqual([]);
  });
  it("object with keys", () => {
    expect(objectEntries({ a: null, b: 2 })).toEqual([
      ["a", null],
      ["b", 2],
    ]);
  });
});
