import { Model } from "../Model";
import { View } from "./View";
import { FigureType, Color, PositionString, cellIndexList } from "../types";
import { posToPosStrMap } from "../helpers/posToStrMap";
import { posToPosStr } from "../helpers/posToStr";

type ApplyControl = (model: Model, view: View) => void;

export type CellData = {
  isAvailableToMove: boolean;
  figure: {
    isAvailableToTake: boolean;
    isSelected: boolean;
    type: FigureType;
    color: Color;
  } | null;
};

export type PresentationModel = {
  [key in PositionString]?: CellData;
};

const modelToPresentation = (model: Model): PresentationModel => {
  const result: PresentationModel = {};

  const figureOnSelectedCell = model.selectedCell
    ? model.getFigure(model.selectedCell.position)
    : null;

  const availableMoves = figureOnSelectedCell ? figureOnSelectedCell.availableMoves : [];
  const availableTakes = figureOnSelectedCell ? figureOnSelectedCell.availableTakes : [];

  const availabelMovesMap = posToPosStrMap(availableMoves);
  const availabelTakesMap = posToPosStrMap(availableTakes);
  const selectedCellMap = model.selectedCell ? posToPosStrMap([model.selectedCell.position]) : {};

  for (let i of cellIndexList) {
    for (let j of cellIndexList) {
      const positionStr = posToPosStr({ x: i, y: j });

      const modelFig = model.figures[positionStr];

      const figure: CellData["figure"] | null = modelFig
        ? {
            color: modelFig.color,
            type: modelFig.type,
            isAvailableToTake: availabelTakesMap[positionStr] ?? false,
            isSelected: selectedCellMap[positionStr] ?? false,
          }
        : null;

      result[positionStr] = {
        isAvailableToMove: availabelMovesMap[posToPosStr({ x: i, y: j })] ?? false,
        figure,
      };
    }
  }

  return result;
};

export class Presenter {
  readonly model: Model;
  readonly view: View;

  constructor(model: Model, view: View, applyControl: ApplyControl) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.initializeFieldState();
    this.view.render(modelToPresentation(model));
    applyControl(model, view);
  }

  private onModelChange(): void {
    this.view.render(modelToPresentation(this.model));
  }
}
