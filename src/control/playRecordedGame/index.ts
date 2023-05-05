import { Model } from "../../Model";
import { Position } from "../../Position";

interface MoveCoordinates {
  positionFrom: Position;
  positionTo: Position;
}

export const playRecordedGame =
  (recordedGame: MoveCoordinates[], stepDelay: number = 1500) =>
  (model: Model) => {
    recordedGame.forEach((move, i) => {
      setTimeout(() => {
        model.tryMoveFigure(move.positionFrom, move.positionTo);
        model.tryTakeFigure(move.positionFrom, move.positionTo);
      }, stepDelay * (i + 1));
    });
  };
