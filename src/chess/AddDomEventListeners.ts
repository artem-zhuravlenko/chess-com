import {View} from "./View";
import {Model} from './Model';
import {strToNumber} from "./utils";
import {Position} from "./types";
import {isNil} from "lodash";



export const getClickedCellCoordinates = (e: MouseEvent): Position | undefined => {
    if (!(e.target instanceof HTMLElement)) return;

    const x = strToNumber(e?.target?.dataset?.x);
    const y = strToNumber(e?.target?.dataset?.y);

    if (isNil(x) || isNil(y)) return

    return {x, y}
}


export class AddDomEventListeners {
    model: Model;
    view: View;
    constructor(model: Model, view: View) {
        this.view = view;
        this.model = model
        this.listenMoveFigure(this.handleMoveFigure);
        this.listenSelectFigure(this.handleSelectFigure);
    }

    private listenSelectFigure(handler: (e: MouseEvent) => void): void {
        this.view.$root.addEventListener("click", handler);
    }

    private listenMoveFigure(handler: (e: MouseEvent) => void): void {
        this.view.$root.addEventListener("click", handler);
    }

    private handleSelectFigure = (e: MouseEvent): void => {
        const clickedCell = getClickedCellCoordinates(e)

        if (!clickedCell) return;

        this.model.selectFigure(clickedCell);
    };

    private handleMoveFigure = (e: MouseEvent): void => {
        const positionTo = getClickedCellCoordinates(e)
        const positionFrom = this.model.selectedCell?.position;

        if (!positionTo || !positionFrom) return;

        const isSameCell =
            positionFrom.x === positionTo.x &&
            positionFrom.y === positionTo.y;

        if (isSameCell) return;

        this.model.figureControl(positionFrom, positionTo);
    };
}