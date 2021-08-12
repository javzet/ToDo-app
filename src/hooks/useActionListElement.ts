import { ElementList } from "../types";

export function useActionListElement<EL extends HTMLElement>(
  elementChildList: ElementList<EL>
) {
  const switchActiveClassBetweenElements = (
    elementId: string,
    activeClass: string,
    callback?: () => void
  ) => {
    elementChildList.forEach((el) => {
      if (el?.id === elementId) {
        el.classList.add(activeClass);
      } else {
        el?.classList.remove(activeClass);
      }
    });
    if (callback) callback();
  };

  return {
    switchActiveClassBetweenElements,
  };
}
