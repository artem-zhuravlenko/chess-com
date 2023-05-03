import { objectKeys } from ".";

describe(objectKeys, () => {
  it("empty object", () => {
    expect(objectKeys({})).toEqual([]);
  });
  it("object with keys", () => {
    expect(objectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });
});
