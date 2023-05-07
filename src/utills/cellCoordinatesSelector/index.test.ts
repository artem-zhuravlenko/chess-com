import { cellCoordinatesSelector } from ".";

describe("cellCoordintaesSelector", () => {
  it('Should return string in format [data-x="0"][data-y="0"]', () => {
    expect(cellCoordinatesSelector(0, 0)).toBe('[data-x="0"][data-y="0"]');
    expect(cellCoordinatesSelector(7, 7)).toBe('[data-x="7"][data-y="7"]');
    expect(cellCoordinatesSelector(3, 5)).toBe('[data-x="3"][data-y="5"]');
  });
});
