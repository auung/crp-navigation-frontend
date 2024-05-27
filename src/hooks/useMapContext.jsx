import { useContext } from "react";
import { MapContext } from "../contexts/MapContext";

const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw Error("useMapContext must be inside a auth context provider");
  }
  
  return context;
}
 
export default useMapContext;