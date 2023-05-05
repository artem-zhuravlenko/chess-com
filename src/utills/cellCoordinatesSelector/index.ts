import { CellIndex } from "../../types";

export const cellCoordinatesSelector = (
  x: CellIndex,
  y: CellIndex
): `[data-x="${CellIndex}"][data-y="${CellIndex}"]` => {
  return `[data-x="${x}"][data-y="${y}"]`;
};
