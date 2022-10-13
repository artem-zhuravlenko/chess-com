import { Model } from "./Model";
import { View } from "./View";

type ApplyControl = (model: Model, view?: View) => void;
export class ControllerMVC {
  model: Model;
  view: View;
  constructor(model: Model, view: View, applyControl: ApplyControl) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.updateFieldState();
    this.view.render(this.model);
    applyControl(model, view);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }
}
