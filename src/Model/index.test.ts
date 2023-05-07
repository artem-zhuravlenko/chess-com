import { Model, getOppositeColor } from ".";
import { Figure } from "../Figure";
import { defaultFigurePosition } from "../defaultData";
import { Position } from "../Position";

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
    const position = new Position({ x: 0, y: 0 });
    expect(model.getFigure(position)).toBeInstanceOf(Figure);
  });

  it("getFigure: should return null", () => {
    const position = new Position({ x: 3, y: 3 });
    expect(model.getFigure(position)).toBe(null);
  });

  it("selectedCell should be empty initially", () => {
    expect(model.selectedCell).toBeNull();
  });

  it("should select figure", () => {
    const position = new Position({ x: 6, y: 6 });

    model.currentTurn = "white";
    model.getFigure = jest.fn().mockReturnValue({ color: "white" });

    model.trySelectFigure(position);

    expect(model.selectedCell).not.toBeFalsy();
  });

  // it("should move a white pawn", () => {
  //   const positionFrom = new Position({ x: 1, y: 6 });
  //   const positionTo = new Position({ x: 1, y: 5 });

  //   // TODO Assert, Act, Access violation
  //   expect(model.figures.get(positionFrom.toString())?.type).toBe("pawn");

  //   model.tryMoveFigure(positionFrom, positionTo);

  //   expect(model.figures.get(positionFrom.toString())).toBeNull();
  //   expect(model.figures.get(positionTo.toString())?.type).toBe("pawn");
  // });
});
