import React, { useContext } from "react";
import { ReactComponent as Dog } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";
import Container from "./Container";
import * as styledHeader from "./style/Header";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <styledHeader.wrapper>
      <Container size={"50em"}>
        <styledHeader.navbar>
          <styledHeader.logo to="/" aria-label="Dogs">
            <Dog style={{margin: '.5rem'}} />
          </styledHeader.logo>
          {data ? (
            <styledHeader.login
              to="/conta"
              aria-label={`Seja bem vindo, ${data.username}`}
            >
              {data.username}
            </styledHeader.login>
          ) : (
            <styledHeader.login
              to="/login"
              aria-label="Faça login ou cadastre-se"
            >
              Login / Cadastrar
            </styledHeader.login>
          )}
        </styledHeader.navbar>
      </Container>
    </styledHeader.wrapper>
  );
};

export default Header;
