import L from "leaflet";
import "leaflet-polylineoffset";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

/* eslint-disable react/prop-types */
const CustomPolyline = ({ positions, offset, color }) => {
  const map = useMap();
  useEffect(() => {
    const polyline = L.polyline(positions, { color })
    polyline.setOffset(offset)
    polyline.addTo(map);
    return () => map.removeLayer(polyline);
  }, [color, map, offset, positions])
  return null;
}

const TrafficLine = ({ road_segment }) => {
  const color = road_segment.traffic_density < 0.33 ? "#53c976" : road_segment.traffic_density > 0.33 && road_segment.traffic_density < 0.66 ? "#e8ed45" : "#f21d1d";

  return (
    <CustomPolyline color={color} positions={road_segment.nodes} offset={2} />
  );
}
 
export default TrafficLine;