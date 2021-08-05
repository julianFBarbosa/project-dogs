import React from "react";
import styled from "styled-components";

import UserNavigation from './UserNavigation.js'
import { GlobalTitle } from "../../GlobalStyle";

const Header = styled.header``;

const UserHeader = () => {
  return (
    <Header>
      <GlobalTitle>Título</GlobalTitle>
      <UserNavigation />
    </Header>
  );
};

export default UserHeader;
