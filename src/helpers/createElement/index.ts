export const createElement = <T extends keyof HTMLElementTagNameMap>(
  tag: T,
  classNames?: string | string[]
): HTMLElementTagNameMap[T] => {
  const $element = document.createElement(tag);

  if (classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        $element.classList.add(className);
      }
    } else {
      $element.classList.add(classNames);
    }
  }

  return $element;
};
