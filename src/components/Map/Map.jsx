import { useState } from "react";
import { Btn, Wrapper } from "./Map.styles";
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from "../LocationMarker/LocationMarker";
import 'leaflet/dist/leaflet.css';
import useFetch from "../../hooks/useFetch";
import TrafficLine from "../TrafficLine/TrafficLine";

const Map = () => {
  const url = import.meta.env.VITE_API;

  const { data: road_segments } = useFetch(url, "GET");
  
  const [center, setCenter] = useState([ 16.778152, 96.150379 ])
  const ZOOM_LEVEL = 15;

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function handleMarkerClick(id) {
    if (start) {
      setEnd(id);
    } else {
      setStart(id);
    }
  }

  const { data: route, fetchData } = useFetch(`${url}/route`, "POST");
  
  function handleFindRoute() {
    console.log(start, end);
    fetchData({
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([start, end])
    });
  }

  return (
    <Wrapper>
      <MapContainer center={center} zoom={ZOOM_LEVEL}>
        <TileLayer attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=x0t5PB7g3FhKpbSzU9l7" />
        {/* intersections && intersections.map(intersection => {
          const id = parseInt(intersection["id"]) + 1;
          const y = intersection["geometry"]["coordinates"][0];
          const x = intersection["geometry"]["coordinates"][1];
          const type = start == id ? "start" : end == id ? "end" : null;
          return (
            <LocationMarker
              key={id}
              id={id}
              position={[x, y]}
              handleMarkerClick={handleMarkerClick}
              type={type}
            ></LocationMarker>
          )
        }) */}

        { road_segments && road_segments.map(road_segment => {
          
          return (
            <TrafficLine key={road_segment.id} road_segment={road_segment} />
          )
        }) }
      </MapContainer>
      <Btn onClick={handleFindRoute}>Find Route</Btn>
    </Wrapper>
  );
}

export default Map;