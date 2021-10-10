import styled from "styled-components";
import { Link } from "react-router-dom";
import User from "../../Assets/usuario.svg";
import media from "styled-media-query";

export const wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 100;
`;

export const navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
`;

export const logo = styled(Link)`
  padding: 0.5rem;
  ${media.lessThan("40rem")`
    padding: 0.5rem 0;
  `}
`;

export const login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    height: 17px;
    width: 14px;
    background: url(${User}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;
