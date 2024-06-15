import L from "leaflet";
import "leaflet-polylineoffset";
import "leaflet.polyline.snakeanim"
import { useEffect } from "react";
import { useMap } from "react-leaflet";

/* eslint-disable react/prop-types */
const CustomPolyline = ({ best, offset, route, visual }) => {
  const map = useMap();
  useEffect(() => {
    const polyline = L.polyline(route.route, {
      color: best ? "red" : "blue",
      snakingSpeed: visual ? 2000 : 700,
      weight: best ? 5 : 2
    })

    polyline.setOffset(offset)
    if (route.distance) {
      polyline.bindTooltip(route.distance, {permanent: true, direction: "top"}).openTooltip()
    }
    polyline.addTo(map).snakeIn();

    return () => map.removeLayer(polyline);
  }, [map, offset, visual, best, route])

  return null;
}

const RouteLine = ({ route, best, visual }) => {

  return (
    <CustomPolyline best={best} offset={2} route={route} visual={visual} />
  );
}
 
export default RouteLine;