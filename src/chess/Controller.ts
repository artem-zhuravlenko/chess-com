import { Model } from "./Model";
import { View } from "./View";
import { isNil } from "lodash";
import { strToNumber } from "./utils";

export class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.updateFieldState();
    this.listenSelectFigure(this.handleSelectFigure.bind(this));
    this.listenMoveFigure(this.handleMoveFigure.bind(this));
    this.view.render(this.model);
  }

  private listenSelectFigure(handler: (e: MouseEvent) => void): void {
    this.view.$root.addEventListener("click", handler);
  }

  private listenMoveFigure(handler: (e: MouseEvent) => void): void {
    this.view.$root.addEventListener("click", handler);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }

  private handleSelectFigure = (e: MouseEvent): void => {
    if (!(e.target instanceof HTMLElement)) return;

    const x = strToNumber(e.target.dataset.x);
    const y = strToNumber(e.target.dataset.y);

    this.model.selectFigure({ x, y });
  };

  private handleMoveFigure = (e: MouseEvent): void => {
    if (!(e.target instanceof HTMLElement)) return;
    if (isNil(this.model.selectedCell)) return;

    const x = strToNumber(e.target.dataset.x);
    const y = strToNumber(e.target.dataset.y);

    const isSameCell =
      this.model.selectedCell.position.x === x &&
      this.model.selectedCell.position.y === y;

    if (isSameCell) return;

    this.model.figureControl({ x, y });
  };
}
