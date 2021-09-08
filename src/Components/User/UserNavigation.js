import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";
import { GlobalTransition } from "../../GlobalStyle";

import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  ${media.lessThan("40rem")`
    animation: ${GlobalTransition} 0.2s;
    display: ${props => (props.isMobile ? "none" : "block")};
    position: absolute;
    top: 70px;
    right: 15px;
    padding: 0 1rem;
    background: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    border-radius: .2rem;
    transform: none;
    opacity: 1;
    pointer-events: auto;
    z-index: 100;
  `}
`;

const StyledNav = styled(NavLink)`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border: 1px solid transparent;
  transition: 0.2s;
  cursor: pointer;

  ${media.greaterThan("40rem")`
    &:hover,
    &:focus {
      background: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
      outline: none;
    }

    &.active {
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;

      & svg > * {
        fill: #fb1;
      }
    }
  `}

  ${media.lessThan("40rem")`
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: .5rem 0;
    cursor: pointer;
    height: min-content;

    svg {
      margin-right: .5rem;
    }
    
    &:hover,
    &:focus {
      svg > * {
        fill: #fb1;
      }
    }
  `}
`;

const MobileButton = styled(StyledNav)`
  display: none;
  height: 40px;
  width: 40px;
  padding: 0;
  background: #eee;

  ${media.lessThan("40rem")`
    display: flex;
    justify-content: center;

  `}

  &:after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  ${props =>
    props.isOpen &&
    css`
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;

      &:after {
        transform: rotate(90deg);
        width: 4px;
        height: 4px;
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
      }
    `};
`;

const UserNavigation = () => {
  const { userLogout } = useContext(UserContext);
  const isMobile = useMedia("(max-width: 40rem)");
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      {isMobile && (
        <MobileButton
          aria-label='Menu'
          onClick={() => setMenuState(!menuState)}
          as='button'
          isOpen={!menuState}
        />
      )}
      <Nav isMobile={menuState}>
        <StyledNav to='/conta' end>
          <Feed title='Minhas fotos' alt='Minhas Fotos' />
          {isMobile && "Minhas Fotos"}
        </StyledNav>
        <StyledNav to='/conta/estatisticas'>
          <Statistics title='Estatísticas' alt='Estatísticas' />
          {isMobile && "Estatísticas"}
        </StyledNav>
        <StyledNav to='/conta/postar'>
          <AddPhoto title='Adicionar Foto' alt='Adicionar Foto' />
          {isMobile && "Adicionar Foto"}
        </StyledNav>
        <StyledNav as='button' onClick={userLogout}>
          <Exit title='Sair' alt='Sair' />
          {isMobile && "Sair"}
        </StyledNav>
      </Nav>
    </>
  );
};

export default UserNavigation;
