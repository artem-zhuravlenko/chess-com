import "../src/styles.scss";
import { View } from "../src/MVC/View";
import { Controller } from "../src/MVC/Controller";
import { Model } from "../src/Model";
import { playRecordedGame } from "../src/control/playRecordedGame";
import { immortalGame1851 } from "../src/control/playRecordedGame/recordedGames/immortalGame1851";
import { defaultFigurePosition } from "../src/defaultData";

new Controller(new Model(defaultFigurePosition), new View(), playRecordedGame(immortalGame1851));
