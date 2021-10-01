import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Dog } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";
import User from "../Assets/usuario.svg";
import Container from "./Container";
import media from "styled-media-query";

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
  margin: 0 auto;
  height: 4rem;
`;

const HeaderLogo = styled(Link)`
  padding: 0.5rem;
  ${media.lessThan('40rem')`
    padding: 0.5rem 0;
  `}
`;


const HeaderLogin = styled(Link)`
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

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderWrapper>
      <Container size={'52rem'}>
        <Navbar>
          <HeaderLogo to='/' aria-label='Dogs'>
            <Dog />
          </HeaderLogo>
          {data ? (
            <HeaderLogin
              to='/conta'
              aria-label={`Seja bem vindo, ${data.username}`}
            >
              {data.username}
            </HeaderLogin>
          ) : (
            <HeaderLogin to='/login' aria-label='Faça login ou cadastre-se'>
              Login / Cadastrar
            </HeaderLogin>
          )}
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
