import L from "leaflet";
import "leaflet-polylineoffset";
import "leaflet.polyline.snakeanim"
import { useEffect } from "react";
import { useMap } from "react-leaflet";

/* eslint-disable react/prop-types */
const CustomPolyline = ({ positions, offset, color, distance }) => {
  const map = useMap();
  useEffect(() => {
    const polyline = L.polyline(positions, { color: "blue", snakingSpeed: 700 })
    polyline.setOffset(offset)
    polyline.bindTooltip(distance, {permanent: true, direction: "top"}).openTooltip()
    polyline.addTo(map).snakeIn();

    return () => map.removeLayer(polyline);
  }, [color, map, offset, positions, distance])

  return null;
}

const RouteLine = ({ route }) => {
  const color = "blue";

  return (
    <CustomPolyline color={color} positions={route.route} offset={2} distance={route.distance} />
  );
}
 
export default RouteLine;