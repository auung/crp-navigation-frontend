import L from "leaflet";
import "leaflet-polylineoffset";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

/* eslint-disable react/prop-types */
const CustomPolyline = ({ positions, offset, color }) => {
  const map = useMap();
  useEffect(() => {
    const polyline = L.polyline(positions, { color });
    polyline.setOffset(offset);
    polyline.addTo(map);

    return () => map.removeLayer(polyline);
  }, [color, map, offset, positions])

  return null;
}

const TrafficLine = ({ roadSegment }) => {
  const color = roadSegment.traffic_density < 0.35 ? "#53c976" : roadSegment.traffic_density > 0.33 && roadSegment.traffic_density < 0.75 ? "#e8ed45" : "#f21d1d";

  return (
    <CustomPolyline color={color} positions={roadSegment.nodes} offset={2} />
  );
}
 
export default TrafficLine;