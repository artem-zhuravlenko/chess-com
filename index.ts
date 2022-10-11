import "./src/styles.scss";
import { View } from "./src/View";
import { ControllerMVC } from "./src/ControllerMVC";
import { Model } from "./src/Model";
import {addDomEventListeners} from "./src/controllers/addDomEventListeners";

new ControllerMVC(new Model(), new View(), addDomEventListeners);
