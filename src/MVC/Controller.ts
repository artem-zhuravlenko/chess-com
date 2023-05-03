import { Model } from "../Model";
import { View } from "./View";

type ApplyControl = (model: Model, view: any) => void;

export class Controller {
  readonly model: Model;
  readonly view: View;

  constructor(model: Model, view: View, applyControl: ApplyControl) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.initializeFieldState();
    this.view.render(this.model);
    applyControl(model, view);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }
}
