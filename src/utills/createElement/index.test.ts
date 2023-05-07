import { createElement } from ".";

describe(createElement, () => {
  it("should creates an element with the specified tag", () => {
    const divElement = createElement("div");

    expect(divElement).toBeInstanceOf(HTMLDivElement);
  });

  it("should creates an element with a single class name", () => {
    const divElement = createElement("div", "my-class");

    expect(divElement).toHaveClass("my-class");
  });

  it("should creates an element with multiple class names as an array", () => {
    const divElement = createElement("div", ["class-one", "class-two"]);

    expect(divElement).toHaveClass("class-one");
    expect(divElement).toHaveClass("class-two");
  });

  it("creates an element without class names when not specified", () => {
    const divElement = createElement("div");

    expect(divElement.className).toBe("");
  });
});
