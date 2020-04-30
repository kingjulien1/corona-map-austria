import React from "react";
import { LineLayer } from "@deck.gl/layers";
import { useCasesPerDistrict } from "../../hooks";

export const useHexLayer = function () {
  let { cases } = useCasesPerDistrict();
  console.log(cases);
};
