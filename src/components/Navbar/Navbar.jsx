import { NavLink } from "react-router-dom";
import { Wrapper } from "./Navbar.styles";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <Wrapper>
      <h1>Navigation App</h1>
      <ul>
        <li>
          <NavLink to="/traffic">Traffic Mode</NavLink>
        </li>
        <li>
          <NavLink to="/navigation">Navigation Mode</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;