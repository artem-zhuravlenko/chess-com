import "../src/styles.scss";
import { View } from "../src/MVP/View";
import { Model } from "../src/Model";
import { playRecordedGame } from "../src/control/playRecordedGame";
import { immortalGame1851 } from "../src/control/playRecordedGame/recordedGames/immortalGame1851";
import { Presenter } from "../src/MVP/Presenter";
import { defaultFigurePosition } from "../src/defaultData";

new Presenter(new Model(defaultFigurePosition), new View(), playRecordedGame(immortalGame1851));
