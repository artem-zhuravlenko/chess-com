import "../src/styles.scss";
import { View } from "../src/View";
import { ControllerMVC } from "../src/ControllerMVC";
import { Model } from "../src/Model";
import {playRecordedGame} from "../src/controllers/playRecordedGame";
import {immortalGame1851} from "../src/controllers/recordedGames/immortalGame1851";

new ControllerMVC(new Model(), new View(), playRecordedGame(immortalGame1851));
