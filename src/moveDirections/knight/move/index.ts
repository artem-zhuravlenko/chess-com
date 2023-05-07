import {Position} from "../../../Position";
import {isWithinTheBoard} from "../../../utills/isWithinTheBoard";

export const move = (position: Position): Position[][] => {
    const result: Position[][] = [];

    const step1 = {x: position.x + 1, y: position.y - 2};
    const step2 = {x: position.x + 2, y: position.y - 1};
    const step3 = {x: position.x + 2, y: position.y + 1};
    const step4 = {x: position.x + 1, y: position.y + 2};
    const step5 = {x: position.x - 1, y: position.y + 2};
    const step6 = {x: position.x - 2, y: position.y + 1};
    const step7 = {x: position.x - 2, y: position.y - 1};
    const step8 = {x: position.x - 1, y: position.y - 2};

    isWithinTheBoard(step1) && result.push([new Position(step1)]);
    isWithinTheBoard(step2) && result.push([new Position(step2)]);
    isWithinTheBoard(step3) && result.push([new Position(step3)]);
    isWithinTheBoard(step4) && result.push([new Position(step4)]);
    isWithinTheBoard(step5) && result.push([new Position(step5)]);
    isWithinTheBoard(step6) && result.push([new Position(step6)]);
    isWithinTheBoard(step7) && result.push([new Position(step7)]);
    isWithinTheBoard(step8) && result.push([new Position(step8)]);

    return result;
}