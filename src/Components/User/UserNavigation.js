import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styled from "styled-components";

import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";


const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const UserNavigation = () => {
  const { userLogout } = useContext(UserContext);

  //chore: make this navigation responsive
  return (
    <Nav>
      <NavLink to='/conta'>
        <Feed title='Minhas fotos' alt='Minhas Fotos' />
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Statistics title='Estatísticas' alt='Estatísticas' />
      </NavLink>
      <NavLink to='/conta/postar'>
        <AddPhoto title='Adicionar Foto' alt='Adicionar Foto' />
      </NavLink>
      <button onClick={userLogout}>
        <Exit title='Sair' alt='Sair' />
      </button>
    </Nav>
  );
};

export default UserNavigation;
