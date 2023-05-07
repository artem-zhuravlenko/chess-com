import {rightDownPositions} from "../../../directionGenerators/rightDownPositions";
import {leftDownPositions} from "../../../directionGenerators/leftDownPositions";
import {rightUpPositions} from "../../../directionGenerators/rightUpPositions";
import {leftUpPositions} from "../../../directionGenerators/leftUpPositions";
import {Position} from "../../../Position";

export const move = (position: Position) => {
    return [
        rightDownPositions(position),
        leftDownPositions(position),
        rightUpPositions(position),
        leftUpPositions(position),
    ].filter((arr) => arr.length > 0);
}