import styled from 'styled-components';
import { flexCenter } from '../../generic-styles/FlexCenter.styles'; 

export const Wrapper = styled.div`
  
  margin: 1.5em 0 1.5em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    gap: 1em;
    align-items: center;
  }
`;

export const SelectPointButton = styled.button`
  font-size: 1rem;
  color: lightgray;
  padding: 0.5em;
  padding-right: 0.75em;
  outline: ${props => props.$active ? "2px lightgray solid" : ""};
  ${flexCenter}
  gap: 0.25em;
  border-radius: 3px;

  &:nth-child(1) span {
    color: #2c6cf5
  }

  &:nth-child(2) span {
    color: #fc2d2d
  }
`;

export const ClearPointBtn = styled.button`
  color: white;
  margin-left: 0.5em;
`;

export const Toggle = styled.div`
  width: 200px;
  border: 3px lightgray solid;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: lightgray;
    position: absolute;
    top: 0;
    left: ${props => props.$priority === "distance" ? "50%" : "0"};
    z-index: -1;
    transition: left 200ms ease-in-out;
  }
`;

export const SelectModeButton = styled.button`
  width: 50%;
  padding: 0.5em 1.25em;
  color: ${props => props.$active ? "#323235" : "lightgray"};
  font-weight: ${props => props.$active ? "500" : ""};
  transition: color 200ms;
`;

export const FindRouteButton = styled.button`
  height: 100%;
  margin-left: 2em;
  font-size: 1rem;
  ${flexCenter}
  gap: 0.5em;
`;