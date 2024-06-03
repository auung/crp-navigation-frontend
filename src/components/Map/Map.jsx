import { Loader, LoadingContainer, Wrapper } from "./Map.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from "../LocationMarker/LocationMarker";
import 'leaflet/dist/leaflet.css';
import TrafficLine from "../TrafficLine/TrafficLine";
import useMapContext from "../../hooks/useMapContext";
import RouteLine from "../RouteLine/RouteLine";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Map = ({ loading, mode, handleMarkerClick }) => {

  const {
    traffic: roadSegments,
    markers: intersections,
    route,
    start,
    end
  } = useMapContext();

  useEffect(() => {
    if (route) {
      console.log(route);
    }
  }, [route]);

  const CENTER = [ 16.778152, 96.150379 ];
  const ZOOM_LEVEL = 15;

  return (
    <Wrapper>
      <MapContainer center={CENTER} zoom={ZOOM_LEVEL} className="map-container">
        <TileLayer attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=x0t5PB7g3FhKpbSzU9l7" />
        { mode === "navigation" && intersections && intersections.map(intersection => {
          const id = intersection.id;
          const type = start == id ? "start" : end == id ? "end" : null;
          return (
            <LocationMarker
              key={id}
              id={id}
              position={intersection.coords}
              handleMarkerClick={handleMarkerClick}
              type={type}
            ></LocationMarker>
          )
        }) }

        { mode === "traffic" && roadSegments && roadSegments.map(roadSegment => {
          return (
            <TrafficLine key={roadSegment.id} roadSegment={roadSegment} />
          )
        }) }

        { mode === "navigation" && route && <RouteLine route={route} /> }
        {/* { mode === "navigation" && route && route.route.map((positions, i) => {
          return (
            <RouteLine key={i} route={positions} />
          )
        }) } */}
      </MapContainer>
      { loading && 
        <LoadingContainer>
          <Loader />
        </LoadingContainer> }
    </Wrapper>
  );
}

export default Map;