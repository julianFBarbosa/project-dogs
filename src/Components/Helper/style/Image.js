import styled, { keyframes } from "styled-components";

const keyframeSkeleton = keyframes`
  from {
    background-position: 0px;
  }
  from {
    background-position: -200%;
  }
`;

export const figure = styled.figure`
  display: grid;
  grid-area: 1/1;
`;

export const image = styled.figure`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: ${({ opacity }) => (opacity ? opacity : 0)};
`;

export const skeleton = styled.figure`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(to right, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${keyframeSkeleton} 2s infinite linear;
`;
