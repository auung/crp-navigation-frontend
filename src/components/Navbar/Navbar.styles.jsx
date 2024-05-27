import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
  }

  ul {
    display: flex;
    gap: 3em;
  }
`;

export const NavBtn = styled.button`
  color: ${props => props.$active ? "white" : "lightgray"};
  font-size: 1rem;
  padding: 0.75em 0;
  pointer-events: ${props => props.$active ? "none" : ""};
  transition: text-decoration 200ms ease-in-out;

  &:hover {
    text-decoration: ${props => props.$active ? "" : "underline"};
  }
`;