import React, { useEffect, useState } from "react";
import UserNavigation from "./UserNavigation.js";
import { GlobalTitle } from "../../GlobalStyle";
import { useLocation } from "react-router-dom";
import * as styledHeader from './style/UserHeader';

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;

      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;

      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <styledHeader.header>
      <GlobalTitle>{title}</GlobalTitle>
      <UserNavigation />
    </styledHeader.header>
  );
};

export default UserHeader;
