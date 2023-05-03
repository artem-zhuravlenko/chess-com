import {
  rightPositions,
  downPositions,
  leftPositions,
  upPositions,
  rightDownPositions,
  rightUpPositions,
  leftDownPositions,
  leftUpPositions,
} from "./directionGenerators";

describe(rightPositions, () => {
  it("Position {x: 0, y: 0}", () => {
    expect(rightPositions({ x: 0, y: 0 })).toEqual([
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
      { x: 7, y: 0 },
    ]);
  });

  it("Position {x: 3, y: 0}", () => {
    expect(rightPositions({ x: 3, y: 0 })).toEqual([
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
      { x: 7, y: 0 },
    ]);
  });

  it("Position {x: 7, y: 0}", () => {
    expect(rightPositions({ x: 7, y: 0 })).toEqual([]);
  });

  it("Position {x: 0, y: 7}", () => {
    expect(rightPositions({ x: 0, y: 7 })).toEqual([
      { x: 1, y: 7 },
      { x: 2, y: 7 },
      { x: 3, y: 7 },
      { x: 4, y: 7 },
      { x: 5, y: 7 },
      { x: 6, y: 7 },
      { x: 7, y: 7 },
    ]);
  });
});

describe(downPositions, () => {
  it("Position {x: 1, y: 2}", () => {
    expect(downPositions({ x: 1, y: 2 })).toEqual([
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
      { x: 1, y: 6 },
      { x: 1, y: 7 },
    ]);
  });

  it("Position {x: 1, y: 7}", () => {
    expect(downPositions({ x: 1, y: 7 })).toEqual([]);
  });

  it("Position {x: 1, y: 6}", () => {
    expect(downPositions({ x: 1, y: 6 })).toEqual([{ x: 1, y: 7 }]);
  });
});

describe(leftPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    expect(leftPositions({ x: 4, y: 3 })).toEqual([
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 0, y: 3 },
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    expect(leftPositions({ x: 0, y: 3 })).toEqual([]);
  });
});

describe(upPositions, () => {
  it("Position {x: 4, y: 3}", () => {
    expect(upPositions({ x: 4, y: 3 })).toEqual([
      { x: 4, y: 2 },
      { x: 4, y: 1 },
      { x: 4, y: 0 },
    ]);
  });

  it("Position {x: 0, y: 3}", () => {
    expect(upPositions({ x: 0, y: 3 })).toEqual([
      { x: 0, y: 2 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
    ]);
  });
});

describe(rightUpPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    expect(rightUpPositions({ x: 5, y: 3 })).toEqual([
      { x: 6, y: 2 },
      { x: 7, y: 1 },
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    expect(rightUpPositions({ x: 4, y: 2 })).toEqual([
      { x: 5, y: 1 },
      { x: 6, y: 0 },
    ]);
  });
});

describe(rightDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    expect(rightDownPositions({ x: 5, y: 3 })).toEqual([
      { x: 6, y: 4 },
      { x: 7, y: 5 },
    ]);
  });

  it("Position {x: 4, y: 2}", () => {
    expect(rightDownPositions({ x: 4, y: 2 })).toEqual([
      { x: 5, y: 3 },
      { x: 6, y: 4 },
      { x: 7, y: 5 },
    ]);
  });

  it("Position {x: 7, y: 2}", () => {
    expect(rightDownPositions({ x: 7, y: 2 })).toEqual([]);
  });

  it("Position {x: 3, y: 7}", () => {
    expect(rightDownPositions({ x: 3, y: 7 })).toEqual([]);
  });
  it("Position {x: 7, y: 7}", () => {
    expect(rightDownPositions({ x: 7, y: 7 })).toEqual([]);
  });
});

describe(leftDownPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    expect(leftDownPositions({ x: 5, y: 3 })).toEqual([
      { x: 4, y: 4 },
      { x: 3, y: 5 },
      { x: 2, y: 6 },
      { x: 1, y: 7 },
    ]);
  });
  it("Position {x: 7, y: 7}", () => {
    expect(leftDownPositions({ x: 7, y: 7 })).toEqual([]);
  });
});

describe(leftUpPositions, () => {
  it("Position {x: 5, y: 3}", () => {
    expect(leftUpPositions({ x: 5, y: 3 })).toEqual([
      { x: 4, y: 2 },
      { x: 3, y: 1 },
      { x: 2, y: 0 },
    ]);
  });

  it("Position {x: 0, y: 0}", () => {
    expect(leftUpPositions({ x: 0, y: 0 })).toEqual([]);
  });
});
