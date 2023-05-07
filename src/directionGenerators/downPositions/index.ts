import {Position} from "../../Position";
import {CELL_IN_ROW} from "../../types";
import {isWithinTheBoard} from "../../utills/isWithinTheBoard";

export const downPositions = (position: Position): Position[] => {
    const positions: Position[] = [];

    for (let i = position.y + 1; i < CELL_IN_ROW; i++) {
        //@ts-expect-error
        const pos = new Position({x: position.x, y: i});

        if (isWithinTheBoard(pos)) {
            positions.push(pos);
        }
    }
    return positions;
};