export function switchClassesElement<E extends HTMLElement | null>(
  classes: string[],
  currentClass: string,
  element: E,
  callback?: () => void
) {
  classes.forEach((className) => {
    if (className === currentClass) {
      element?.classList.add(className);
    } else {
      element?.classList.remove(className);
    }
  });
  if (callback) callback();
}
