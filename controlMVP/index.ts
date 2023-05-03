import "../src/styles.scss";
import { Model } from "../src/Model";
import { addDomEventListeners } from "../src/control/addDomEventListeners";
import { Presenter } from "../src/MVP/Presenter";
import { View } from "../src/MVP/View";
import { defaultFigurePosition } from "../src/defaultData";

new Presenter(new Model(defaultFigurePosition), new View(), addDomEventListeners);
