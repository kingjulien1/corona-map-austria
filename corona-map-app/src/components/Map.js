import React from "react";
import ReactMapGl from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { mapboxApiAccessToken } from "../config";

export default function ({ data }) {
  let heatmap = new HeatmapLayer({
    id: "heat",
    data,
    opacity: 0.7,
    getPosition: (d) => [parseFloat(d.lon), parseFloat(d.lat)],
    getWeight: (d) => d.Anzahl / 100,
  });

  const austria = {
    lng: 14.550072,
    lat: 47.516232,
  };
  //center of austria
  const initialViewState = {
    longitude: austria.lng,
    latitude: austria.lat,
    zoom: 6,
    pitch: 0,
    bearing: 0,
  };
  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={[heatmap]}
    >
      <ReactMapGl mapboxApiAccessToken={mapboxApiAccessToken}></ReactMapGl>
    </DeckGL>
  );
}
