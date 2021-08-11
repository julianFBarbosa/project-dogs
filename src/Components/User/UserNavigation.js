import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styled from "styled-components";

import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";
import media from "styled-media-query";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  ${media.lessThan("40rem")`
    display: none;
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
  transition: 0.1s;
  cursor: pointer;

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
`;

const MobileButton = styled(StyledNav)`
  padding: 0;
  display: none;

  ${media.lessThan("40rem")`
    display: block;
  `}
`;

const UserNavigation = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  console.log("mobile", mobile);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          as='button'
        >
          a
        </MobileButton>
      )}
      <Nav>
        <StyledNav to='/conta' end>
          <Feed title='Minhas fotos' alt='Minhas Fotos' />
          {mobile && "Minhas Fotos"}
        </StyledNav>
        <StyledNav to='/conta/estatisticas'>
          <Statistics title='Estatísticas' alt='Estatísticas' />
          {mobile && "Estatísticas"}
        </StyledNav>
        <StyledNav to='/conta/postar'>
          <AddPhoto title='Adicionar Foto' alt='Adicionar Foto' />
          {mobile && "Adicionar Foto"}
        </StyledNav>
        <StyledNav as='button' onClick={userLogout}>
          <Exit title='Sair' alt='Sair' />
          {mobile && "Sair"}
        </StyledNav>
      </Nav>
    </>
  );
};

export default UserNavigation;
