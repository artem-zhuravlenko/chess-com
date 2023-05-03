import { Model, getOppositeColor } from "../Model";
import { Figure } from "../Figure";
import { defaultFigurePosition } from "../defaultData";

describe("getOppositeColor", () => {
  it("Should return opposite color", () => {
    expect(getOppositeColor("white")).toBe("black");
    expect(getOppositeColor("black")).toBe("white");
  });
});

describe("Model", () => {
  let model: Model;

  beforeEach(() => {
    model = new Model(defaultFigurePosition);
    // TODO should to be real function
    model.onModelChange = () => {};
  });

  it("getFigure: should return figure", () => {
    expect(model.getFigure({ x: 0, y: 0 })).toBeInstanceOf(Figure);
  });

  it("getFigure: should return null", () => {
    expect(model.getFigure({ x: 3, y: 3 })).toBe(null);
  });

  it("trySelectFigure: should return figure", () => {
    model.trySelectFigure({ x: 6, y: 6 });

    expect(model.selectedCell).not.toBeFalsy();
  });
});
