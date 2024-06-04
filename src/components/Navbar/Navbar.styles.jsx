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

    a {
      color: lightgray;
      padding: 0.75em 0;
      transition: text-decoration 200ms ease-in-out;

      &.active {
        color: white;
        pointer-events: none;
      }

      &:not(.active):hover {
        text-decoration: underline;
      }
    }
  }
`;