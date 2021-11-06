import styled from "styled-components";
import media from "styled-media-query";
import { GlobalAnination } from "../../../GlobalStyle";

export const container = styled(GlobalAnination)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  ${media.lessThan("40rem")`
    grid-template-columns: 1fr;
  `}
`;

export const total = styled.div`
  grid-column: 1 / 3;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  padding: 2rem;
  font-size: 2rem;
`;

export const item = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`;
