import {Position} from "../../Position";
import {CELL_IN_ROW} from "../../types";
import {isWithinTheBoard} from "../../utills/isWithinTheBoard";

export const rightDownPositions = (position: Position): Position[] => {
    const positions: Position[] = [];

    const minDist = Math.min(CELL_IN_ROW - position.x, CELL_IN_ROW - position.y);

    for (let i = 1; i < minDist; i++) {
        //@ts-expect-error
        const pos = new Position({x: position.x + i, y: position.y + i});

        if (isWithinTheBoard(pos)) {
            positions.push(pos);
        }
    }

    return positions;
};