import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer, HexagonLayer } from "@deck.gl/aggregation-layers";
import { mapboxApiAccessToken } from "../config";

const austria = {
  lng: 14.550072,
  lat: 47.516232,
};
//center of austria
const initialViewState = {
  longitude: austria.lng,
  latitude: austria.lat,
  zoom: 6,
  //tilt
  pitch: 20,
  bearing: 0,
};

export default function ({ data }) {
  let [hovered, setHovered] = useState();
  let [{ pointerx, pointery }, setPosition] = useState({});

  //tooltip
  function renderTooltip() {
    return (
      hovered && (
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            pointerEvents: "none",
            left: pointerx,
            top: pointery,
          }}
        >
          <strong>{hovered.name}</strong> hat derzeit{" "}
          <strong>{hovered.cases}</strong>
          Corona Erkrankte.
        </div>
      )
    );
  }

  //heatmap
  let heatmap = new HeatmapLayer({
    id: "heatmap",
    data,
    intensity: 5,
    radiusPixels: 70,
    getPosition: (d) => [parseFloat(d.lon), parseFloat(d.lat)],
    getWeight: (d) => parseInt(d.cases),
  });

  //hexagon layer
  let hex = new HexagonLayer({
    id: "hexagon",
    data,
    radius: 4000,
    elevationScale: 100,
    opacity: 0.7,
    extruded: true,
    getPosition: (d) => [parseFloat(d.lon), parseFloat(d.lat)],
    getElevationValue: (d) => parseInt(d[0].cases),
    getColorValue: (d) => parseInt(d[0].cases),
    pickable: true,
    onHover: (info) => {
      setPosition({ pointerx: info?.x, pointery: info?.y });
      setHovered(info?.object?.points[0]);
    },
  });

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={[hex, heatmap]}
    >
      <ReactMapGl mapboxApiAccessToken={mapboxApiAccessToken}>
        {renderTooltip()}
      </ReactMapGl>
    </DeckGL>
  );
}
