import { useEffect, useRef, useState } from "react";
import Action from "../components/Action/Action";
import Map from "../components/Map/Map";
import useFetch from "../hooks/useFetch";
import useMapContext from "../hooks/useMapContext";

const Navigation = () => {
  const TIME = 10;
  const url = import.meta.env.VITE_API + "navigate";
  const { data: intersections, loading: intLoading, error: intError } = useFetch(url);
  const { data: route, loading: routeLoading, error: routeError, fetchData} = useFetch(url, false);
  const { start, end, dispatch } = useMapContext();

  const [counter, setCounter] = useState(TIME);
  const counterIntervalID = useRef(null);
  const fetchIntervalID = useRef(null);

  const [selectMode, setSelectMode] = useState();
  const [priority, setPriority] = useState("time");

  function handleChangeSelectMode(mode) {
    if (mode === "start") {
      setSelectMode("start");
    } else if (mode === "end") {
      setSelectMode("end");
    } else {
      setSelectMode();
    }
  }

  function handleChangePriority(priority) {
    if (priority === "time") {
      setPriority("time");
    } else if (priority === "distance") {
      setPriority("distance");
    }
  }

  function handleMarkerClick(id) {
    clearIntervals();
    if (selectMode === "start") {
      dispatch({ type: "setStart", payload: id })
    } else if (selectMode === "end") {
      dispatch({ type: "setEnd", payload: id })
    }
  }

  function handleFindRoute() {
    clearIntervals();
    if (start && end) { 
      fetchData({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([start, end])
      })
    }
  }

  function clearIntervals() {
    setCounter(TIME);
    clearInterval(counterIntervalID.current);
    clearInterval(fetchIntervalID.current);
  }

  useEffect(() => {
    clearIntervals();
    if (route) {
      if (!routeLoading) {
        counterIntervalID.current = setInterval(() => {
          setCounter(c => c - 1)
        }, 1000)
      }

      fetchIntervalID.current =  setInterval(() => {
        handleFindRoute()
      }, TIME * 1000)
    }

    return () => {
      clearIntervals();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  useEffect(() => {
    return () => {
      clearInterval(counterIntervalID.current);
      clearInterval(fetchIntervalID.current);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Action
        selectMode={selectMode}
        priority={priority}
        handleFindRoute={handleFindRoute}
        handleChangeSelectMode={handleChangeSelectMode}
        handleChangePriority={handleChangePriority}
      />
      <Map
        counter={counter}
        intersections={intersections}
        route={route}
        loading={intLoading || routeLoading}
        handleMarkerClick={handleMarkerClick}
      />
      { intError &&  <span>{ intError }</span> }
      { routeError &&  <span>{ routeError }</span> }
    </>
  );
}
 
export default Navigation;