import styled from "styled-components";
import { GlobalTransition } from "../../../GlobalStyle";

export const section = styled.section`
  animation: ${GlobalTransition} 0.2s ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const input = styled.input`
  margin-bottom: 1rem;
`;

export const preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &:after {
    content: "";
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
