import { Model } from "../../Model";
import { View } from "../View";
import { FigureType, Color, PositionString, cellIndexList } from "../../types";
import { Position } from "../../Position";

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

export const modelForView = (model: Model): PresentationModel => {
  const result: PresentationModel = {};

  const figureOnSelectedCell = model.selectedCell
    ? model.getFigure(model.selectedCell.position)
    : null;

  const availableMoves = figureOnSelectedCell ? figureOnSelectedCell.availableMoves : new Set();

  const availableTakes = figureOnSelectedCell ? figureOnSelectedCell.availableTakes : new Set();

  for (let i of cellIndexList) {
    for (let j of cellIndexList) {
      const position = new Position({ x: i, y: j });

      const modelFig = model.figures.get(position.toString());

      const figure: CellData["figure"] | null = modelFig
        ? {
            color: modelFig.color,
            type: modelFig.type,
            isAvailableToTake: availableTakes.has(position.toString()),
            isSelected: model.selectedCell
              ? model.selectedCell.position.toString() === position.toString()
              : false,
          }
        : null;

      result[position.toString()] = {
        isAvailableToMove: availableMoves.has(position.toString()),
        figure,
      };
    }
  }

  console.log(model);
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
    this.view.render(modelForView(model));
    applyControl(model, view);
  }

  private onModelChange(): void {
    this.view.render(modelForView(this.model));
  }
}
