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

export const addDomEventListeners = ( model: Model, view: View ) => {
    const handleSelectFigure = (e: MouseEvent): void => {
        const clickedCell = getClickedCellCoordinates(e)

        if (!clickedCell) return;

        model.selectFigure(clickedCell);
    };

    const handleMoveFigure = (e: MouseEvent): void => {
        const positionTo = getClickedCellCoordinates(e)
        const positionFrom = model.selectedCell?.position;

        if (!positionTo || !positionFrom) return;

        const isSameCell =
            positionFrom.x === positionTo.x &&
            positionFrom.y === positionTo.y;

        if (isSameCell) return;

        model.figureControl(positionFrom, positionTo);
    };

    view.$root.addEventListener("click", handleMoveFigure);
    view.$root.addEventListener("click", handleSelectFigure);
}