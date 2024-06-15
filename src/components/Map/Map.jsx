import { Loader, LoadingContainer, Wrapper } from "./Map.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from "../LocationMarker/LocationMarker";
import 'leaflet/dist/leaflet.css';
import TrafficLine from "../TrafficLine/TrafficLine";
import RouteLine from "../RouteLine/RouteLine";
import useMapContext from "../../hooks/useMapContext";

const Map = ({ intersections, roadSegments, routes, route, loading, handleMarkerClick, counter, visual }) => {
  // const url = import.meta.env.VITE_API;
  // const { data: roadSegments, loading: intLoading, error: intError, fetchData } = useFetch(url);
  const CENTER = [ 16.77599, 96.15600 ];
  const ZOOM_LEVEL = 15;

  const { start, end } = useMapContext();

  return (
    <Wrapper>
      <MapContainer center={CENTER} zoom={ZOOM_LEVEL} className="map-container">
        <TileLayer attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=x0t5PB7g3FhKpbSzU9l7" />

        { intersections && intersections.map(intersection => {
          const id = intersection.id;
          const type = start == id ? "start" : end == id ? "end" : null;
          return (
            <LocationMarker
              key={id}
              id={id}
              position={intersection.coords}
              handleMarkerClick={handleMarkerClick}
              type={type}
            />
          )
        }) }

        { visual && 
          <>
            <LocationMarker
              position={[16.78000993, 96.13954572]}
              type="start"
            />
            <LocationMarker
              position={[16.77123636, 96.17527646]}
              type="end"
            />
          </>
        }

        { roadSegments && roadSegments.map(roadSegment => {
          return (
            <TrafficLine key={roadSegment.id} roadSegment={roadSegment} />
          )
        }) }

        { route && <RouteLine route={route} /> }

        { routes && routes.length > 0 && routes.map((route, i) => {
          return (
            <RouteLine key={i} route={route} best={i === routes.length - 1} visual={visual} />
          )
        }) }
      </MapContainer>

      { loading && 
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      }

      { counter && counter > 0 && <span>Traffic refresh in: { counter }</span> }
    </Wrapper>
  );
}

export default Map;