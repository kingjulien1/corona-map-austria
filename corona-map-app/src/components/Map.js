import React from "react";
import { ReactComponent as Map } from "../img/map.svg";
import { useCasesPerDistrict } from "../hooks";

export default function () {
  let { cases, loading } = useCasesPerDistrict();
  return (
    <div>
      {cases?.map((element) => {
        return (
          <pre key={element.bezirk}>
            {element.Bezirk + " hat " + element.Anzahl + " fälle"}
          </pre>
        );
      })}
    </div>
  );
}
