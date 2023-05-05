import { View } from "../MVP/View";
import { Model } from "../Model";
import { CellIndex } from "../types";
import { Position } from "../Position";
import { isNil } from "lodash";
import { isCellIndex } from "../utills/isCellIndex";

const strToCellIndex = (str: string | undefined): CellIndex | null => {
  if (isNil(str)) {
    return null;
  }

  const num = Number(str);

  return isCellIndex(num) ? num : null;
};

export const getClickedCellCoordinates = (e: MouseEvent): Position | undefined => {
  if (!(e.target instanceof HTMLDivElement)) return;

  const x = strToCellIndex(e.target.dataset?.x);
  const y = strToCellIndex(e.target.dataset?.y);

  if (isNil(x) || isNil(y)) return;

  return new Position({ x, y });
};

export const addDomEventListeners = (model: Model, view: View) => {
  const handleSelectFigure = (e: MouseEvent): void => {
    const clickedCell = getClickedCellCoordinates(e);

    if (!clickedCell) return;

    model.trySelectFigure(clickedCell);
  };

  const handleMoveFigure = (e: MouseEvent): void => {
    const positionTo = getClickedCellCoordinates(e);
    const positionFrom = model.selectedCell?.position;

    if (!positionTo || !positionFrom) return;

    const isSameCell = positionFrom.x === positionTo.x && positionFrom.y === positionTo.y;

    if (isSameCell) return;

    model.tryMoveFigure(positionFrom, positionTo);
    model.tryTakeFigure(positionFrom, positionTo);
  };

  view.$root.addEventListener("click", handleMoveFigure);
  view.$root.addEventListener("click", handleSelectFigure);
};
