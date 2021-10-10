import { GlobalTransition } from "../../../GlobalStyle";
import styled from "styled-components";
import media from "styled-media-query";

export const list = styled.ul`
  animation: ${GlobalTransition} 0.3s;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  ${media.lessThan("40rem")`
    grid-template-columns: repeat(2, 1fr);
  `}
`;
