import { Wrapper } from "./Map.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from "../LocationMarker/LocationMarker";
import 'leaflet/dist/leaflet.css';
import TrafficLine from "../TrafficLine/TrafficLine";
import useMapContext from "../../hooks/useMapContext";
import RouteLine from "../RouteLine/RouteLine";

// eslint-disable-next-line react/prop-types
const Map = ({ mode, handleMarkerClick }) => {

  const {
    traffic: roadSegments,
    markers: intersections,
    route,
    start,
    end
  } = useMapContext();

  const CENTER = [ 16.778152, 96.150379 ];
  const ZOOM_LEVEL = 15;

  return (
    <Wrapper>
      <MapContainer center={CENTER} zoom={ZOOM_LEVEL}>
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

        { roadSegments && roadSegments.map(roadSegment => {
          return (
            <TrafficLine key={roadSegment.id} roadSegment={roadSegment} />
          )
        }) }
{/* 
        { mode === "navigation" && route && route.map(latlong => {
          return (
            <RouteLine key={route.indexOf(latlong)} positions={latlong} />
          )
        })} */}

        { mode === "navigation" && route && <RouteLine positions={route} /> }
      </MapContainer>
    </Wrapper>
  );
}

export default Map;