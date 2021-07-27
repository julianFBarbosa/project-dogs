import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import Background from "../../Assets/login.jpg";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";
import { UserContext } from "../../UserContext";
import styled from "styled-components";
import media from "styled-media-query";

const LoginWraper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
  gap: 2rem;

  &:before {
    content: "";
    display: block;
    background: url(${Background}) no-repeat center center;
    background-size: cover;
  }
  ${media.lessThan("40rem")`
    grid-template-columns: 1fr;
    &:before {
      background: none;
    }
  `}
`;

const Forms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  margin-top: 20vh;
`;

const Login = () => {
  const { login } = useContext(UserContext);

  if (!!login) return <Navigate to='/conta' />;
  return (
    <LoginWraper>
      <Forms>
        <Routes>
          <Route path='/' exact element={<LoginForm />} />
          <Route path='cadastro' exact element={<LoginCreate />} />
          <Route path='recuperacao' exact element={<LoginPasswordLost />} />
          <Route
            path='redefinir-senha'
            exact
            element={<LoginPasswordReset />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Forms>
    </LoginWraper>
  );
};

export default Login;
