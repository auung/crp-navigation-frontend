import L from "leaflet";
import "leaflet-polylineoffset";
import "leaflet.polyline.snakeanim"
import { useEffect } from "react";
import { useMap } from "react-leaflet";

/* eslint-disable react/prop-types */
const CustomPolyline = ({ positions, offset, color }) => {
  const map = useMap();
  useEffect(() => {
    const polyline = L.polyline(positions, { color: "blue", snakingSpeed: 700 })
    polyline.setOffset(offset)
    polyline.addTo(map).snakeIn();

    return () => map.removeLayer(polyline);
  }, [color, map, offset, positions])

  return null;
}

const RouteLine = ({ positions }) => {
  const color = "blue";

  return (
    <CustomPolyline color={color} positions={positions} offset={2} />
  );
}
 
export default RouteLine;