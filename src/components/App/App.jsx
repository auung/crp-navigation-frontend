import { useEffect, useState } from "react";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import { Wrapper } from "./App.styles";
import Action from "../Action/Action";
import useFetch from "../../hooks/useFetch";
import useMapContext from "../../hooks/useMapContext";

const App = () => {
  const url = import.meta.env.VITE_API;
  const { data, loading, setFetchParams } = useFetch();
  const { markers, start, end, route, dispatch } = useMapContext();

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

  function handleFindRoute() {
    if (start && end) {
      setFetchParams([url + "navigate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([start, end])
      }])
    }
  }

  useEffect(() => {
    if (pageMode === "traffic") {
      setFetchParams([url])
    } else if (pageMode === "navigation") {
      setFetchParams([url + "navigate"]);
    }
    
    return () => dispatch({ type: "cleanUp" })
  // eslint-disable-next-line
  }, [pageMode]);

  useEffect(() => {
    if (data) {
      if (pageMode === "traffic") {
        dispatch({ type: "traffic", payload: data });
      } else if (pageMode === "navigation") {
        if (!markers) {
          dispatch({ type: "markers", payload: data });
        } else {
          dispatch({ type: "route", payload: data })
        }
      }
    }
    
  // eslint-disable-next-line
  }, [data]);

  return (
    <Wrapper>
      <Navbar mode={pageMode} setMode={setPageMode} />
      { pageMode === "navigation" && <Action selectMode={selectMode} setSelectMode={setSelectMode} priority={priority} setPriority={setPriority} handleFindRoute={handleFindRoute} distance={route?.distance}/> }
      <Map loading={loading} mode={pageMode} handleMarkerClick={handleMarkerClick} />
    </Wrapper>
  )
}

export default App;