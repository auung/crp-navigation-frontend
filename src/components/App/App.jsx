import { useEffect, useState } from "react";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import { Wrapper } from "./App.styles";
import Action from "../Action/Action";
import useFetch from "../../hooks/useFetch";
import useMapContext from "../../hooks/useMapContext";

const App = () => {
  const url = import.meta.env.VITE_API;
  const { data, setUrl, setOptions } = useFetch();
  const { dispatch } = useMapContext();

  const [pageMode, setPageMode] = useState("traffic");
  const [selectMode, setSelectMode] = useState();
  const [priority, setPriority] = useState("time");

  function handleMarkerClick(id) {
    if (selectMode === "start") {
      dispatch({ type: "setStart", payload: id })
    } else if (selectMode === "end") {
      dispatch({ type: "setEnd", payload: id })
    }
  }

  useEffect(() => {
    if (pageMode === "traffic") {
      setOptions({ method: "GET" });
      setUrl(url);
    } else if (pageMode === "navigation") {
      setOptions({ method: "GET" });
      setUrl(url + "navigate");
    }
    
  // eslint-disable-next-line
  }, [pageMode]);

  useEffect(() => {
    if (data) {
      if (pageMode === "traffic") {
        dispatch({ type: "traffic", payload: data });
      } else if (pageMode === "navigation") {
        dispatch({ type: "markers", payload: data });
      }
    }
    
  // eslint-disable-next-line
  }, [data]);

  return (
    <Wrapper>
      <Navbar mode={pageMode} setMode={setPageMode} />
      <Action selectMode={selectMode} setSelectMode={setSelectMode} priority={priority} setPriority={setPriority} />
      <Map mode={pageMode} selectMode={selectMode} handleMarkerClick={handleMarkerClick} />
    </Wrapper>
  )
}

export default App;