import {Position} from "../../Position";
import {isWithinTheBoard} from "../../utills/isWithinTheBoard";

export const leftUpPositions = (position: Position): Position[] => {
    const positions: Position[] = [];

    const minDist = Math.min(position.x, position.y);

    for (let i = 1; i <= minDist; i++) {
        //@ts-expect-error
        const pos = new Position({x: position.x - i, y: position.y - i});

        if (isWithinTheBoard(pos)) {
            positions.push(pos);
        }
    }

    return positions;
};