import {Position} from "../../../Position";
import {upPositions} from "../../../directionGenerators/upPositions";
import {downPositions} from "../../../directionGenerators/downPositions";
import {leftPositions} from "../../../directionGenerators/leftPositions";
import {rightPositions} from "../../../directionGenerators/rightPositions";

export const move = (position: Position): Position[][] => {
    return [
        upPositions(position),
        downPositions(position),
        leftPositions(position),
        rightPositions(position),
    ].filter((arr) => arr.length > 0);
};