import {
  rightPositions,
  downPositions,
  leftPositions,
  upPositions,
  rightDownPositions,
  rightUpPositions,
  leftDownPositions,
  leftUpPositions,
} from ".";
import { Position } from "../Position";

describe(rightPositions, () => {
  it("Position {x: 0, y: 0}", () => {
    const position = new Position({ x: 0, y: 0 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 1, y: 0 }),
      new Position({ x: 2, y: 0 }),
      new Position({ x: 3, y: 0 }),
      new Position({ x: 4, y: 0 }),
      new Position({ x: 5, y: 0 }),
      new Position({ x: 6, y: 0 }),
      new Position({ x: 7, y: 0 }),
    ]);
  });

  it("Position {x: 3, y: 0}", () => {
    const position = new Position({ x: 3, y: 0 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 4, y: 0 }),
      new Position({ x: 5, y: 0 }),
      new Position({ x: 6, y: 0 }),
      new Position({ x: 7, y: 0 }),
    ]);
  });

  it("Position {x: 7, y: 0}", () => {
    const position = new Position({ x: 7, y: 0 });
    expect(rightPositions(position)).toEqual([]);
  });

  it("Position {x: 0, y: 7}", () => {
    const position = new Position({ x: 0, y: 7 });
    expect(rightPositions(position)).toEqual([
      new Position({ x: 1, y: 7 }),
      new Position({ x: 2, y: 7 }),
      new Position({ x: 3, y: 7 }),
      new Position({ x: 4, y: 7 }),
      new Position({ x: 5, y: 7 }),
      new Position({ x: 6, y: 7 }),
      new Position({ x: 7, y: 7 }),
    ]);
  });
});

describe(downPositions, () => {
  it("Position {x: 1, y: 2}", () => {
    const position = new Position({ x: 1, y: 2 });
    expect(downPositions(position)).toEqual([
      new Position({ x: 1, y: 3 }),
      new Position({ x: 1, y: 4 }),
      new Position({ x: 1, y: 5 }),
      new Position({ x: 1, y: 6 }),
      new Position({ x: 1, y: 7 }),
    ]);
  });

  it("Position {x: 1, y: 7}", () => {
    const position = new Position({ x: 1, y: 7 });
    expect(downPositions(position)).toEqual([]);
  });

  it("Position {x: 1, y: 6}", () => {
    const position = new Position({ x: 1, y: 6 });
    expect(downPositions(position)).toEqual([new Position({ x: 1, y: 7 })]);
  });
});

describe(leftPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    const position = new Position({ x: 4, y: 3 });
    expect(leftPositions(position)).toEqual([
      new Position({ x: 3, y: 3 }),
      new Position({ x: 2, y: 3 }),
      new Position({ x: 1, y: 3 }),
      new Position({ x: 0, y: 3 }),
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    const position = new Position({ x: 0, y: 3 });
    expect(leftPositions(position)).toEqual([]);
  });
});

describe(upPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    const position = new Position({ x: 4, y: 3 });
    expect(upPositions(position)).toEqual([
      new Position({ x: 4, y: 2 }),
      new Position({ x: 4, y: 1 }),
      new Position({ x: 4, y: 0 }),
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    const position = new Position({ x: 0, y: 3 });
    expect(upPositions(position)).toEqual([
      new Position({ x: 0, y: 2 }),
      new Position({ x: 0, y: 1 }),
      new Position({ x: 0, y: 0 }),
    ]);
  });
});

describe(rightUpPositions, () => {
  const position = new Position({ x: 5, y: 3 });
  it("Position {x: 5, y: 3}", () => {
    expect(rightUpPositions(position)).toEqual([
      new Position({ x: 6, y: 2 }),
      new Position({ x: 7, y: 1 }),
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    const position = new Position({ x: 4, y: 2 });
    expect(rightUpPositions(position)).toEqual([
      new Position({ x: 5, y: 1 }),
      new Position({ x: 6, y: 0 }),
    ]);
  });
});

describe(rightDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(rightDownPositions(position)).toEqual([
      new Position({ x: 6, y: 4 }),
      new Position({ x: 7, y: 5 }),
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    const position = new Position({ x: 4, y: 2 });
    expect(rightDownPositions(position)).toEqual([
      new Position({ x: 5, y: 3 }),
      new Position({ x: 6, y: 4 }),
      new Position({ x: 7, y: 5 }),
    ]);
  });

  it("Position {x: 7, y: 2}", () => {
    const position = new Position({ x: 7, y: 2 });
    expect(rightDownPositions(position)).toEqual([]);
  });

  it("Position {x: 3, y: 7}", () => {
    const position = new Position({ x: 3, y: 7 });
    expect(rightDownPositions(position)).toEqual([]);
  });
  it("Position {x: 7, y: 7}", () => {
    const position = new Position({ x: 7, y: 7 });
    expect(rightDownPositions(position)).toEqual([]);
  });
});

describe(leftDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(leftDownPositions(position)).toEqual([
      new Position({ x: 4, y: 4 }),
      new Position({ x: 3, y: 5 }),
      new Position({ x: 2, y: 6 }),
      new Position({ x: 1, y: 7 }),
    ]);
  });
  it("Position {x: 7, y: 7}", () => {
    const position = new Position({ x: 7, y: 7 });
    expect(leftDownPositions(position)).toEqual([]);
  });
});

describe(leftUpPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    const position = new Position({ x: 5, y: 3 });
    expect(leftUpPositions(position)).toEqual([
      new Position({ x: 4, y: 2 }),
      new Position({ x: 3, y: 1 }),
      new Position({ x: 2, y: 0 }),
    ]);
  });

  it("Position {x: 0, y: 0}", () => {
    const position = new Position({ x: 0, y: 0 });
    expect(leftUpPositions(position)).toEqual([]);
  });
});
