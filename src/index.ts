import "./chess/styles.scss";
import { View } from "./chess/View";
import { Controller } from "./chess/Controller";
import { Model } from "./chess/Model";

new Controller(new Model(), new View());
