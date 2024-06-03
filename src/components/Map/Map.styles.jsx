import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 75%;
  background-color: white;
  margin: auto;
  position: relative;

  > div {
    height: 100%;
    z-index: 1;
  }
`;

export const Btn = styled.button`
  font-size: 1.25rem;
  font-family: inherit;
  padding: 0.5em 1em;
  background-color: gray;
  color: black;
  border: none;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-color: gray;
  opacity: 75%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  gap: 1em;
`;

export const Loader = styled.div`
  /* HTML: <div class="loader"></div> */
  display: inline-flex;
  gap: 10px;

  &:before,
  &:after {
    content: "";
    height: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
      #fff;
    animation: l5 3s infinite;
  }

  @keyframes l5 {
    0%,11%   {background-position:35% 35%}
    14%,36%  {background-position:65% 35%}
    38%,61%  {background-position:65% 65%}
    64%,86%  {background-position:35% 65%}
    88%,100% {background-position:35% 35%}
  }
`
