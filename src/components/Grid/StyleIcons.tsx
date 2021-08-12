import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import { switchClassesElement } from "../../helpers/switchClassesElement";
import { useActionListElement } from "../../hooks/useActionListElement";
import { BarsIcon } from "../../images/bars-icon";
import { ColumnIcon } from "../../images/column-icon";
import { GridIcon } from "../../images/grid-icon";
import { ElementList } from "../../types";

export const StyleIcons = ({
  gridRef,
}: {
  gridRef: React.RefObject<HTMLDivElement>;
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
      BarsButtonStyleRef.current,
    ]);
  }, []);

  const { switchActiveClassBetweenElements } =
    useActionListElement(elementList);
  const { switchActiveClassBetweenElements: setGridActiveClass } =
    useActionListElement([gridRef.current]);

  const handleButtonStyleClick = (
    actionPressedType: "bars" | "grid" | "column"
  ) => {
    if (actionPressedType === "bars") {
      switchActiveClassBetweenElements("bars", "active-style");
      switchClassesElement(["bars", "grid", "column"], "bars", gridRef.current);
      // BarsButtonStyleRef.current?.classList.add("active-style");
      // GridButtonStyleRef.current?.classList.remove("active-style");
      // ColumnButtonStyleRef.current?.classList.remove("active-style");
    } else if (actionPressedType === "grid") {
      // GridButtonStyleRef.current?.classList.add("active-style");
      // BarsButtonStyleRef.current?.classList.remove("active-style");
      // ColumnButtonStyleRef.current?.classList.remove("active-style");
      switchActiveClassBetweenElements("grid", "active-style");
      switchClassesElement(["bars", "grid", "column"], "grid", gridRef.current);
    } else {
      // ColumnButtonStyleRef.current?.classList.add("active-style");
      // GridButtonStyleRef.current?.classList.remove("active-style");
      // BarsButtonStyleRef.current?.classList.remove("active-style");
      switchActiveClassBetweenElements("column", "active-style");
      switchClassesElement(
        ["bars", "grid", "column"],
        "column",
        gridRef.current
      );
    }
  };

  useLayoutEffect(() => {
    GridButtonStyleRef.current?.classList.add("active-style");
    gridRef.current?.classList.add("grid");
  }, []);

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
      <button
        id="column"
        ref={ColumnButtonStyleRef}
        onClick={() => handleButtonStyleClick("column")}
      >
        <ColumnIcon />
      </button>
    </div>
  );
};
