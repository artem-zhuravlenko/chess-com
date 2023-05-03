import "../src/styles.scss";
import { View } from "../src/MVC/View";
import { Controller } from "../src/MVC/Controller";
import { Model } from "../src/Model";
import { addDomEventListeners } from "../src/control/addDomEventListeners";
import { defaultFigurePosition } from "../src/defaultData";

new Controller(new Model(defaultFigurePosition), new View(), addDomEventListeners);
