import { Model } from "./Model";
import { View } from "./View";

type ApplyListeners = ((model: Model, view: View) => void) | ((model: Model, view?: View) => void);

export class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View, applyListeners: ApplyListeners) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.updateFieldState();
    this.view.render(this.model);
    applyListeners(model, view);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }

}
