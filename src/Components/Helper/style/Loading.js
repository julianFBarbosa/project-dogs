import styled from "styled-components";

export const wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const loading = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  padding-left: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;
