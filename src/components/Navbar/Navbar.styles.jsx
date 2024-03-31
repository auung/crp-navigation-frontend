import styled from 'styled-components';
import { flexCenter } from "../../generic-styles/FlexCenter.styles";

export const Wrapper = styled.nav`
  height: 64px;
  ${flexCenter}

  h1 {
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
  }
`;