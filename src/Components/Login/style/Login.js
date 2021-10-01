import styled from "styled-components";
import media from "styled-media-query";
import Background from "../../../Assets/login.jpg";

export const LoginWraper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
  gap: 2rem;

  &:before {
    content: "";
    display: block;
    background: url(${Background}) no-repeat center center;
    background-size: cover;
  }
  ${media.lessThan("40rem")`
      grid-template-columns: 1fr;
      &:before {
        background: none;
    }
  `}
`;

export const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
`;
