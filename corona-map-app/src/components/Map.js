import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { mapboxApiAccessToken } from "../config";

export default function ({ layers }) {
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
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap
        viewport={initialViewState}
        mapboxApiAccessToken={mapboxApiAccessToken}
      ></StaticMap>
      ;
    </DeckGL>
  );
}
