import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  height: 100vh;
  width: 80%;
  margin: auto;
`;

// eslint-disable-next-line react/prop-types
const Root = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
    
  );
}
 
export default Root;