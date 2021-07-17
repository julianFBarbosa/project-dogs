import { ReactComponent as Dog } from "../Assets/dogs.svg";
import { Link } from "react-router-dom";
import React from "react";
import User from "../Assets/usuario.svg";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 100;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 .5rem;
  height: 4rem;
`;

const HeaderLogo = styled(Link)`
  padding: 0.5rem;
`;

const HeaderLogin = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    height: 17px;
    width: 14px;
    background: url(${User}) no-repeat center center;
    margin-left: .5rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar>
        <HeaderLogo to='/' aria-label='Dogs'>
          <Dog />
        </HeaderLogo>
        <HeaderLogin to='/login' aria-label='Faça login ou cadastre-se'>
          Login / Cadastrar
        </HeaderLogin>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
