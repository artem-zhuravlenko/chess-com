import { isNil } from "lodash";
import { Model } from "../Model";
import { CELL_IN_ROW, CELL_SIZE_PX, Position, Color, CellIndex } from "../types";
import { createElement } from "../helpers/createElement";
import { getElement } from "../helpers/getElement";
import { convertToFigureCSSClass } from "../helpers/convertToFigureCSSClass";
import { cellCoordinatesSelector } from "../helpers/cellCoordinatesSelector";
import { cellColor } from "../helpers/cellColor";

export const createCell = (color: Color): HTMLElement => {
  const $cell = createElement("div", "cell");
  $cell.classList.add(color);

  return $cell;
};

export class View {
  readonly $root: HTMLElement;
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
    for (let i = 0; i < CELL_IN_ROW; i++) {
      for (let j = 0; j < CELL_IN_ROW; j++) {
        this.drawCell(model, {
          x: i as CellIndex,
          y: j as CellIndex,
        });
      }
    }
  }

  private drawAvailableMoves(model: Model): void {
    if (!model.selectedCell) return;

    const selectedFigure = model.getFigure(model.selectedCell.position);

    if (isNil(selectedFigure)) return;

    selectedFigure.availableMoves.forEach((move) => {
      const $cell = this.$chessField.querySelector(cellCoordinatesSelector(move.x, move.y));
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
      const $cell = this.$chessField.querySelector(cellCoordinatesSelector(move.x, move.y));
      if ($cell) {
        $cell.classList.add("availableTake");
      }
    });
  }

  private drawCell(model: Model, position: Position): void {
    const $cell = createCell(cellColor(position));

    $cell.setAttribute("data-x", position.x.toString());
    $cell.setAttribute("data-y", position.y.toString());

    $cell.style.top = CELL_SIZE_PX * position.y + "px";
    $cell.style.left = CELL_SIZE_PX * position.x + "px";

    const isSelectedFigure =
      model.selectedCell &&
      model.selectedCell.position.x === position.x &&
      model.selectedCell.position.y === position.y;

    if (isSelectedFigure) {
      $cell.classList.add("selectedFigure");
    }

    const figure = model.getFigure(position);

    if (figure) {
      const className = convertToFigureCSSClass(figure.color, figure.type);

      $cell.classList.add(className);
    }

    this.$chessField.appendChild($cell);
  }
}
