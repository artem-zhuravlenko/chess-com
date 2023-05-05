import { CELL_SIZE_PX, Color } from "../../types";
import { Position } from "../../Position";
import { createElement } from "../../utills/createElement";
import { getElement } from "../../utills/getElement";
import { objectEntries } from "../../utills/objectEntries";
import { convertToFigureCSSClass } from "../../utills/convertToFigureCSSClass";
import { cellColor } from "../../utills/cellColor";
import { PresentationModel, CellData } from "../Presenter";

export const createCell = (color: Color): HTMLElement => {
  const $cell = createElement("div", "cell");
  $cell.classList.add(color);

  return $cell;
};

export class View {
  $root: HTMLElement;
  $chessField: HTMLElement;
  constructor() {
    this.$chessField = createElement("div", "field");
    this.$root = getElement("#app")!;
  }

  public render(presentationModel: PresentationModel): void {
    this.$chessField = createElement("div", "field");

    this.drawBoard(presentationModel);

    this.$root.replaceChildren(this.$chessField);
  }

  private drawBoard(presentationModel: PresentationModel): void {
    objectEntries(presentationModel).forEach(([key, value]) => {
      const position = Position.posStrToObj(key);

      this.drawCell(position, value!);
    });
  }

  private drawCell(position: Position, cellData: CellData): void {
    const $cell = createCell(cellColor(position));

    $cell.setAttribute("data-x", position.x.toString());
    $cell.setAttribute("data-y", position.y.toString());

    $cell.style.top = CELL_SIZE_PX * position.y + "px";
    $cell.style.left = CELL_SIZE_PX * position.x + "px";

    if (cellData.isAvailableToMove) {
      $cell.classList.add("availableMove");
    }

    if (cellData.figure) {
      const figureClassName = convertToFigureCSSClass(cellData.figure.color, cellData.figure.type);

      $cell.classList.add(figureClassName);

      if (cellData.figure.isSelected) {
        $cell.classList.add("selectedFigure");
      }

      if (cellData.figure.isAvailableToTake) {
        $cell.classList.add("availableTake");
      }
    }

    this.$chessField.appendChild($cell);
  }
}
