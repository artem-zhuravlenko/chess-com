import {Position} from "../../Position";
import {isWithinTheBoard} from "../../utills/isWithinTheBoard";

export const leftPositions = (position: Position): Position[] => {
    const positions: Position[] = [];

    for (let i = 1; i <= position.x; i++) {
        //@ts-expect-error
        const pos = new Position({x: position.x - i, y: position.y});

        if (isWithinTheBoard(pos)) {
            positions.push(pos);
        }
    }
    return positions;
};