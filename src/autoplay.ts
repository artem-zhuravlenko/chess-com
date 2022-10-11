import "./chess/styles.scss";
import { View } from "./chess/View";
import { ControllerMVC } from "./chess/ControllerMVC";
import { Model } from "./chess/Model";
import {playRecordedGame} from "./chess/controllers/playRecordedGame";
import {immortalGame1851} from "./chess/controllers/recordedGames/immortalGame1851";

new ControllerMVC(new Model(), new View(), playRecordedGame(immortalGame1851));
