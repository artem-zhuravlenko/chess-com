import {getOppositeColor} from "./index";

describe("getOppositeColor", () => {
  it("Should return opposite color", () => {
    expect(getOppositeColor("white")).toBe("black");
    expect(getOppositeColor("black")).toBe("white");
  });
});

