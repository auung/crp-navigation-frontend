import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Map />
    </Wrapper>
  );
}

export default App;