import { Model} from ".";
import { Figure } from "../Figure";
import { defaultFigurePosition } from "../defaultData";
import { Position } from "../Position";
import {COLOR, FIGURE_TYPE, PositionString} from "../types";

// TODO use toHaveBeenCalledWith

// TODO Now result dependent on position of call, this is very bad

describe('initializeFieldState', () => {
  const model = new Model(defaultFigurePosition);
  model.bindCommitChanges(jest.fn()) ;

  it('all figures should have no moves and takes before initializeFieldState', () => {
    model.figures.forEach((figure) => {
      expect(Array.from(figure.availableTakes)).toEqual([])
      expect(Array.from(figure.availableMoves)).toEqual([])
    })
  })

  it('figures should update moves and takes after initializeFieldState', () => {

    const whitePawn = model.getFigure(new Position({x: 4, y: 6}))
    const blackKnight = model.getFigure(new Position({x: 1, y: 0}))

    model.initializeFieldState();

    expect(Array.from(whitePawn!.availableMoves).length).toBeGreaterThan(0)
    expect(Array.from(blackKnight!.availableMoves).length).toBeGreaterThan(0)
  })
})

describe("Model", () => {
  let model: Model;

  beforeEach(() => {
    model = new Model(defaultFigurePosition);
    model.bindCommitChanges(jest.fn());
    model.initializeFieldState();
  });

  it("Model initialized correctly", () => {
    expect(model.selectedCell).toBeNull();
    expect(model.currentTurn).toBe('white');
  });

  it("getFigure: should return figure", () => {
    const position = new Position({ x: 0, y: 0 });
    expect(model.getFigure(position)).toBeInstanceOf(Figure);
  });

  it("getFigure: should return null", () => {
    const position = new Position({ x: 3, y: 3 });
    expect(model.getFigure(position)).toBe(null);
  });

  it("selectedCell: should be empty initially", () => {
    expect(model.selectedCell).toBeNull();
  });

  it("trySelectFigure: should select figure", () => {
    const position = new Position({ x: 6, y: 6 });

    model.currentTurn = "white";
    model.getFigure = jest.fn().mockReturnValue({ color: "white" });

    model.trySelectFigure(position);

    expect(model.selectedCell).not.toBeFalsy();
  });

  it("tryMoveFigure: should not move, if figure not selected", () => {
    const positionFrom = new Position({x: 3, y: 5}); // No figure on position
    const positionTo = new Position({x: 3, y: 4});

    model.tryMoveFigure(positionFrom, positionTo);

    expect(model.currentTurn).toBe('white') // as it was initially
  })

  it.todo("tryMoveFigure: should not move, if figure on the way")

  it("tryMoveFigure: should not move, if it is not available move for selected figure", () => {
    const positionFrom = new Position({x: 4, y: 6});
    const positionTo = new Position({x: 4, y: 3}); // pawns can't move on 3 cells forward

    model.tryMoveFigure(positionFrom, positionTo);

    expect(model.currentTurn).toBe('white') // as it was initially
  })

  it("tryMoveFigure: figure move", () => {
    const positionFrom = new Position({x: 2, y: 6});
    const positionTo = new Position({x: 2, y: 4});

    model.tryMoveFigure(positionFrom, positionTo);

    // Is it violate Assert, Act, Access rule?
    const figureOnPositionFrom = model.getFigure(new Position({x: 2, y: 6}));
    const figureOnPositionTo = model.getFigure(new Position({x: 2, y: 4}));

    expect(figureOnPositionFrom).toBeFalsy();
    expect(figureOnPositionTo).toBeTruthy();
    expect(model.currentTurn).toBe('black');
  })

  it("tryMoveFigure: should change turn, if figure moved", () => {
    const positionFrom = new Position({x: 1, y: 7});
    const positionTo = new Position({x: 0, y: 5});

    model.tryMoveFigure(positionFrom, positionTo);

    expect(model.currentTurn).toBe('black');
  })

  it("tryMoveFigure: should clear selectedCell, if figure moved", () => {
    const positionFrom = new Position({x: 6, y: 7});
    const positionTo = new Position({x: 7, y: 5});

    model.tryMoveFigure(positionFrom, positionTo);

    expect(model.selectedCell).toBeFalsy();
    expect(model.currentTurn).toBe('black');
  })

  it.todo("tryMoveFigure: should update field state, if figure moved")
});


describe('tryTakeFigure', () => {
  let model: Model;

  const testDefaultFigurePosition: Map<PositionString, Figure> = new Map([
    [new Position({ x: 4, y: 3 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.white)],
    [new Position({ x: 3, y: 2 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
    [new Position({ x: 5, y: 2 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
    [new Position({ x: 2, y: 1 }).toString(), new Figure(FIGURE_TYPE.pawn, COLOR.black)],
  ])

  beforeEach(() => {
    model = new Model(testDefaultFigurePosition);
    model.bindCommitChanges(jest.fn());
    model.initializeFieldState();
  });

  afterEach(() => {
    //@ts-expect-error
    model = null;
  })

  it('selected figure on positionFrom should be able to take figure on positionTo', () => {
    model.currentTurn = 'black';

    const positionFrom = new Position({x: 3, y: 2}); // black pawn
    const positionTo = new Position({x: 4, y: 3});

    model.tryTakeFigure(positionFrom, positionTo);

    expect(model.getFigure(positionFrom)).toBeFalsy();
    expect(model.getFigure(positionTo)?.color).toBe('black');
  })

  it('figure on positionTo should be enemy', () => {
    model.currentTurn = 'black';

    const positionFrom1 = new Position({x: 3, y: 2}); // black pawn
    const positionTo1 = new Position({x: 2, y: 1}); // black pawn

    model.tryTakeFigure(positionFrom1, positionTo1);

    expect(model.currentTurn).toBe('black') // take shouldn't happen
  })

  it("figure on positionTo shouldn't be empty cell", () => {
    model.currentTurn = 'black';

    const positionFrom = new Position(({x: 2, y: 1}));
    const positionTo = new Position(({x: 3, y: 0}));

    model.tryTakeFigure(positionFrom, positionTo);

    expect(model.currentTurn).toBe('black') // take shouldn't happen
  })
})
