import { createContext, useReducer } from "react";

export const MapContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const mapReducer = (state, action) => {
  switch (action.type) {
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

    case "cleanUp":
      return {
        start: null,
        end: null
      }
  }
}

// eslint-disable-next-line react/prop-types
const MapContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, {
    start: null,
    end: null,
  })

  return (
    <MapContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MapContext.Provider>
  );
}
 
export default MapContextProvider;