import {Position} from "../../Position";
import {CELL_IN_ROW} from "../../types";
import {isWithinTheBoard} from "../../utills/isWithinTheBoard";

export const rightPositions = (position: Position): Position[] => {
    const positions: Position[] = [];

    for (let i = position.x + 1; i < CELL_IN_ROW; i++) {
        //@ts-expect-error
        const pos = new Position({x: i, y: position.y});

        if (isWithinTheBoard(pos)) {
            positions.push(pos);
        }
    }
    return positions;
};