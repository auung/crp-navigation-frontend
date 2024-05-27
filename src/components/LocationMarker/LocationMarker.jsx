import { Marker } from "react-leaflet";
import L from "leaflet";

/* eslint-disable react/prop-types */
const LocationMarker = ({ id, position, handleMarkerClick, type }) => {

  const defaultMarker = () => {
    return L.divIcon({
      className: `custom-marker default`,
      html: `<div></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  }

  const startMarker = () => {
    return L.divIcon({
      className: `custom-marker start`,
      html: `<span class="material-symbols-outlined">location_on</span>`,
      iconSize: [16, 16],
      iconAnchor: [12, 20]
    });
  }

  const endMarker = () => {
    return L.divIcon({
      className: `custom-marker end`,
      html: `<span class="material-symbols-outlined">location_on</span>`,
      iconSize: [16, 16],
      iconAnchor: [12, 20]
    });
  }

  return (
    <Marker
      position={position}
      icon={
        type == "start" ? startMarker() :
        type == "end" ? endMarker() :
        defaultMarker()
      }
      eventHandlers={{ click: () => {
        if (!type) {
          handleMarkerClick(id);
        }
      }}}
    ></Marker>
  )
}
 
export default LocationMarker;