import styled from "styled-components";
import media from "styled-media-query";

export const container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 500;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  ${media.lessThan("40rem")`
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  `}
`;
