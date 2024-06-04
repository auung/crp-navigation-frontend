import useFetch from "../hooks/useFetch";
import Map from "../components/Map/Map";

const Traffic = () => {
  const url = import.meta.env.VITE_API;
  const { data: traffic, loading, error } = useFetch(url);

  return (
    <>
      <Map roadSegments={traffic} loading={loading} />
      { error &&  <span>{ error }</span> }
    </>
  );
}
 
export default Traffic;