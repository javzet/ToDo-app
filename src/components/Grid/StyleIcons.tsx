import { useLayoutEffect, useRef, useState, useEffect, RefObject } from "react";
import { BarsIcon } from "../../images/bars-icon";
import { GridIcon } from "../../images/grid-icon";
import { switchClassesElement } from "../../helpers/switchClassesElement";
import { useActionListElement } from "../../hooks/useActionListElement";
import { ElementList } from "../../types";

export const StyleIcons = ({
  gridRef
}: {
  gridRef:RefObject<HTMLDivElement>;
}) => {
  const GridButtonStyleRef = useRef<HTMLButtonElement>(null);
  const ColumnButtonStyleRef = useRef<HTMLButtonElement>(null);
  const BarsButtonStyleRef = useRef<HTMLButtonElement>(null);

  const [elementList, setElementList] = useState<
    ElementList<HTMLButtonElement>
  >([]);

  useEffect(() => {
    setElementList([
      GridButtonStyleRef.current,
      ColumnButtonStyleRef.current,
      BarsButtonStyleRef.current
    ]);
  }, []);

  const { switchActiveClassBetweenElements } =
    useActionListElement(elementList);

  const handleButtonStyleClick = (actionPressedType: "bars" | "grid") => {
    if (actionPressedType === "bars") {
      switchActiveClassBetweenElements("bars", "active-style");

      switchClassesElement(["bars", "grid"], "bars", gridRef.current);
    } else if (actionPressedType === "grid") {
      switchActiveClassBetweenElements("grid", "active-style");

      switchClassesElement(["bars", "grid"], "grid", gridRef.current);
    }
  };

  useLayoutEffect(() => {
    GridButtonStyleRef.current?.classList.add("active-style");
    gridRef.current?.classList.add("grid");
  }, [gridRef]);

  return (
    <div className="view-style-buttons">
      <button
        id="bars"
        ref={BarsButtonStyleRef}
        onClick={() => handleButtonStyleClick("bars")}
      >
        <BarsIcon />
      </button>
      <button
        id="grid"
        ref={GridButtonStyleRef}
        onClick={() => handleButtonStyleClick("grid")}
      >
        <GridIcon />
      </button>
    </div>
  );
};
