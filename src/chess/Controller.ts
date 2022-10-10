import { Model } from "./Model";
import { View } from "./View";

type ApplyListeners = new (model: Model, view: View) => void;

export class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View, ApplyListeners: ApplyListeners) {
    this.model = model;
    this.view = view;
    this.model.bindModelChange(this.onModelChange.bind(this));
    this.model.updateFieldState();
    this.view.render(this.model);
    new ApplyListeners(model, view);
  }

  private onModelChange(): void {
    this.view.render(this.model);
  }

}
