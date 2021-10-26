import React from "react";
import { GlobalTitle } from "../GlobalStyle";
import Container from "./Container";

const NotFound = () => {
  return (
    <Container>
      <GlobalTitle>Erro: 404</GlobalTitle>
      <p>Página não encontrada</p>
    </Container>
  );
};

export default NotFound;
