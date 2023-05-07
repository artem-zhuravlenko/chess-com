import { getElement } from ".";

describe(getElement, () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <div class="item"></div>
      </div>
    `;
  });

  it("returns an HTMLElement when the selector matches an element", () => {
    const container = getElement("#container");

    expect(container).toBeInstanceOf(HTMLElement);
    expect(container?.id).toBe("container");
  });

  it("returns null when the selector does not match any element", () => {
    const nonExistent = getElement("#non-existent");

    expect(nonExistent).toBeNull();
  });

  it("returns an HTMLElement when the selector matches a class", () => {
    const item = getElement(".item");

    expect(item).toBeInstanceOf(HTMLElement);
    expect(item?.classList.contains("item")).toBe(true);
  });
});
