import { createContext, useReducer } from "react";

export const MapContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const mapReducer = (state, action) => {
  switch (action.type) {
    case "traffic":
      return {
        ...state,
        traffic: action.payload
      }

    case "markers":
      return {
        ...state,
        markers: action.payload
      }

    case "setStart":
      return {
        ...state,
        start: action.payload
      }

    case "setEnd":
      return {
        ...state,
        end: action.payload
      }

    case "route":
      return {
        ...state,
        route: action.payload
      }

    case "cleanUp":
      return {
        traffic: null,
        markers: null,
        start: null,
        end: null,
        route: null
      }
  }
}

// eslint-disable-next-line react/prop-types
const MapContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, {
    traffic: null,
    markers: null,
    start: null,
    end: null,
    route: null
  })

  return (
    <MapContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MapContext.Provider>
  );
}
 
export default MapContextProvider;