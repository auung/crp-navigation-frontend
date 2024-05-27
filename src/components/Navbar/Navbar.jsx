import { NavBtn, Wrapper } from "./Navbar.styles";

// eslint-disable-next-line react/prop-types
const Navbar = ({ mode, setMode }) => {
  return (
    <Wrapper>
      <h1>Navigation App</h1>
      <ul>
        <li>
          <NavBtn onClick={() => setMode("traffic")} $active={mode === "traffic"}>Traffic Mode</NavBtn>
        </li>
        <li>
          <NavBtn onClick={() => setMode("navigation")} $active={mode === "navigation"}>Navigation Mode</NavBtn>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;