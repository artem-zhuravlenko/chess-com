import "../src/styles.scss";
import { View } from "../src/View";
import { ControllerMVC } from "../src/ControllerMVC";
import { Model } from "../src/Model";
import {playRecordedGame} from "../src/control/playRecordedGame";
import {immortalGame1851} from "../src/control/playRecordedGame/recordedGames/immortalGame1851";

new ControllerMVC(new Model(), new View(), playRecordedGame(immortalGame1851));
