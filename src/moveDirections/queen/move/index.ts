import {Position} from "../../../Position";
import {upPositions} from "../../../directionGenerators/upPositions";
import {downPositions} from "../../../directionGenerators/downPositions";
import {leftPositions} from "../../../directionGenerators/leftPositions";
import {rightPositions} from "../../../directionGenerators/rightPositions";
import {rightDownPositions} from "../../../directionGenerators/rightDownPositions";
import {leftDownPositions} from "../../../directionGenerators/leftDownPositions";
import {rightUpPositions} from "../../../directionGenerators/rightUpPositions";
import {leftUpPositions} from "../../../directionGenerators/leftUpPositions";

export const move = (position: Position): Position[][] => {
    return [
        upPositions(position),
        downPositions(position),
        leftPositions(position),
        rightPositions(position),
        rightDownPositions(position),
        leftDownPositions(position),
        rightUpPositions(position),
        leftUpPositions(position),
    ].filter((arr) => arr.length > 0);
};