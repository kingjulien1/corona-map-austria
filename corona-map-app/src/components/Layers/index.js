export const hexlayerconfig = {
  id: "h3-hexagon-layer",
  pickable: true,
  wireframe: false,
  filled: true,
  extruded: true,
  elevationScale: 20,
  getHexagon: (d) => d.hex,
  getFillColor: (d) => [255, (1 - d.count / 500) * 255, 0],
  getElevation: (d) => d.count,
  onHover: ({ object, x, y }) => {},
};

export const heatmaplayerconfig = {
  id: "heatmapLayer",
  getPosition: (d) => d.COORDINATES,
  getWeight: (d) => d.WEIGHT,
};
