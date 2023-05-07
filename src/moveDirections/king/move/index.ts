import {upPositions} from "../../../directionGenerators/upPositions";
import {downPositions} from "../../../directionGenerators/downPositions";
import {leftPositions} from "../../../directionGenerators/leftPositions";
import {rightPositions} from "../../../directionGenerators/rightPositions";
import {rightDownPositions} from "../../../directionGenerators/rightDownPositions";
import {leftDownPositions} from "../../../directionGenerators/leftDownPositions";
import {rightUpPositions} from "../../../directionGenerators/rightUpPositions";
import {leftUpPositions} from "../../../directionGenerators/leftUpPositions";
import {Position} from "../../../Position";

export const move = (position: Position): Position[][] => {
    return [
        upPositions(position).slice(0, 1),
        downPositions(position).slice(0, 1),
        leftPositions(position).slice(0, 1),
        rightPositions(position).slice(0, 1),
        rightDownPositions(position).slice(0, 1),
        leftDownPositions(position).slice(0, 1),
        rightUpPositions(position).slice(0, 1),
        leftUpPositions(position).slice(0, 1),
    ].filter((arr) => arr.length > 0);
}