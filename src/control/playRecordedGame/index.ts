import { MoveCoordinates } from "./recordedGames/immortalGame1851";
import { Model } from "../../Model";

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
