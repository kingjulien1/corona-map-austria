import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { mapboxApiAccessToken } from "../config";
import { useHexLayer } from "./Layers/LineLayer";

export default function () {
  useHexLayer();

  const austria = {
    lng: 14.550072,
    lat: 47.516232,
  };
  //center of austria
  const initialViewState = {
    longitude: austria.lng,
    latitude: austria.lat,
    zoom: 6,
  };
  return (
    <DeckGL initialViewState={initialViewState} controller={true}>
      <StaticMap
        viewport={initialViewState}
        mapboxApiAccessToken={mapboxApiAccessToken}
      ></StaticMap>
    </DeckGL>
  );
}
