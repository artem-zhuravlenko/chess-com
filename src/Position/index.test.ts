import { Position } from ".";
describe(Position, () => {
  let position1: Position;
  let position2: Position;

  beforeEach(() => {
    position1 = new Position({ x: 1, y: 3 });
    position2 = new Position({ x: 7, y: 0 });
  });

  it("should convert to string properly", () => {
    expect(position1.toString()).toBe("1:3");
    expect(position2.toString()).toBe("7:0");
  });
});
