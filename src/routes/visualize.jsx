import { useEffect,useState } from "react";
import Map from "../components/Map/Map";
import useFetch from "../hooks/useFetch";

const Visualize = () => {
  const url = import.meta.env.VITE_API + "visualize";
  const { data: allRoutes, loading: loading, error: error} = useFetch(url);
  const [routes, setRoutes] = useState([]);
  const [gen, setGen] = useState();
  const [fitness, setFitness] = useState();

  useEffect(() => {
    let id;

    if (allRoutes) {
      allRoutes.forEach((c_routes, i) => {
        id = setTimeout(() => {
          setGen(i + 1)
          setRoutes(c_routes);
          setFitness(c_routes.at(-1).fitness)
        }, (i + 1) * 1000)
      })
    }

    return () => clearTimeout(id);
  }, [allRoutes]);

  return (
    <>
      <Map routes={routes} loading={loading} visual={true} />
      { gen && <span>Generation: { gen }</span> }
      { fitness && <span style={{ marginLeft: 3 + "em" }}>Fitness: { fitness }</span> }
      { error && <span>{ error }</span> }
    </>
  );
}
 
export default Visualize;