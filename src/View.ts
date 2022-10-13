import { isNil } from "lodash";
import { Model } from "./Model";
import { CELL_COUNT_IN_ROW, CELL_WIDTH_PX, Position } from "./types";
import {
  cellColor,
  cellCoordinatesSelector,
  convertToFigureClassName,
  createElement,
  getElement
} from "./utils";

export class View {
  $root: HTMLElement;
  $chessField: HTMLElement;
  constructor() {
    this.$chessField = createElement("div", "field");
    this.$root = getElement("#app")!;
  }

  public render(model: Model): void {
    this.$chessField = createElement("div", "field");

    this.drawBoard(model);
    this.drawAvailableMoves(model);
    this.drawAvailableTakes(model);

    this.$root.replaceChildren(this.$chessField);
  }

  private drawBoard(model: Model): void {
    for (let i = 0; i < CELL_COUNT_IN_ROW; i++) {
      for (let j = 0; j < CELL_COUNT_IN_ROW; j++) {
        this.drawCell(model, {
          x: i,
          y: j,
        });
      }
    }
  }

  private drawAvailableMoves(model: Model): void {
    if (!model.selectedCell) return;

    const selectedFigure = model.getFigure(model.selectedCell.position);

    if (isNil(selectedFigure)) return;

    selectedFigure.availableMoves.forEach((move) => {
      const $cell = this.$chessField.querySelector(
        cellCoordinatesSelector(move.x, move.y)
      );
      if ($cell) {
        $cell.classList.add("availableMove");
      }
    });
  }

  private drawAvailableTakes(model: Model): void {
    if (!model.selectedCell) return;

    const selectedFigure = model.getFigure(model.selectedCell.position);

    if (isNil(selectedFigure)) return;

    selectedFigure.availableTakes.forEach((move) => {
      const $cell = this.$chessField.querySelector(
        cellCoordinatesSelector(move.x, move.y)
      );
      if ($cell) {
        $cell.classList.add("availableTake");
      }
    });
  }

  public drawCell(model: Model, position: Position): void {
    const type = cellColor(position);
    const $cell = createElement("div", `cell`);
    $cell.classList.add(type);

    $cell.setAttribute("data-x", position.x.toString());
    $cell.setAttribute("data-y", position.y.toString());
    $cell.style.top = CELL_WIDTH_PX * position.y + "px";
    $cell.style.left = CELL_WIDTH_PX * position.x + "px";

    const isSelectedFigure =
      model.selectedCell &&
      model.selectedCell.position.x === position.x &&
      model.selectedCell.position.y === position.y;

    if (isSelectedFigure) {
      $cell.classList.add("selectedFigure");
    }

    const figure = model.getFigure(position);

    if (figure) {
      const className = convertToFigureClassName(
        figure.color,
        figure.figureType
      );

      $cell.classList.add(className);
    }

    this.$chessField.appendChild($cell);
  }
}
