import "./chess/styles.scss";
import { View } from "./chess/View";
import { Controller } from "./chess/Controller";
import { Model } from "./chess/Model";
import {immortalGame1851} from "./chess/mock/immortalGame1851";


const zombe = (model: Model) => {
  immortalGame1851.forEach((move, i) => {
    setTimeout(() => {
      model.figureControl(move.positionFrom, move.positionTo);
    }, 1500 * (i + 1));
  });
};

new Controller(new Model(), new View(), zombe);
