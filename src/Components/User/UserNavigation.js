import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";
import * as styledNavigation from "./style/UserNavigation";

import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Exit } from "../../Assets/sair.svg";

const UserNavigation = () => {
  const { userLogout } = useContext(UserContext);
  const { pathname } = useLocation();
  const [menuState, setMenuState] = useState(false);
  const isMobile = useMedia("(max-width: 40rem)");

  useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <styledNavigation.mobileButton
          aria-label="Menu"
          onClick={() => setMenuState(!menuState)}
          as="button"
          isOpen={menuState}
        />
      )}
      <styledNavigation.nav isMobile={!menuState}>
        <styledNavigation.styledNav to="/conta" end>
          <Feed title="Minhas fotos" alt="Minhas Fotos" />
          {isMobile && "Minhas Fotos"}
        </styledNavigation.styledNav>

        <styledNavigation.styledNav to="/conta/estatisticas">
          <Statistics title="Estatísticas" alt="Estatísticas" />
          {isMobile && "Estatísticas"}
        </styledNavigation.styledNav>
        <styledNavigation.styledNav to="/conta/postar">
          <AddPhoto title="Adicionar Foto" alt="Adicionar Foto" />
          {isMobile && "Adicionar Foto"}
        </styledNavigation.styledNav>
        <styledNavigation.styledNav as="button" onClick={userLogout}>
          <Exit title="Sair" alt="Sair" />
          {isMobile && "Sair"}
        </styledNavigation.styledNav>
      </styledNavigation.nav>
    </>
  );
};

export default UserNavigation;
