import { Model } from "./Model";
import { View } from "./View";

type ApplyControllers =
  | ((model: Model, view: View) => void)
  | ((model: Model, view?: View) => void);

export class ControllerMVC {
  model: Model;
  view: View;
  constructor(model: Model, view: View, applyControllers: ApplyControllers) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.updateFieldState();
    this.view.render(this.model);
    applyControllers(model, view);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }
}
