import React, { useEffect, useState } from "react";
import styled from "styled-components";

import UserNavigation from "./UserNavigation.js";
import { GlobalTitle } from "../../GlobalStyle";
import { useLocation } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

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
    <Header>
      <GlobalTitle>{title}</GlobalTitle>
      <UserNavigation />
    </Header>
  );
};

export default UserHeader;
