import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginLost";
import LoginPasswordReset from "./LoginReset";
import NotFound from "../NotFound";
import { UserContext } from "../../UserContext";
import * as styleLogin from "./style/Login";

//TODO: refactor ALL styles, create a folder inside every compoents,
//TODO: paste styles there and remove them from objects

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <styleLogin.LoginWraper>
      <styleLogin.Forms>
        <Routes>
          <Route path="/" exact element={<LoginForm />} />
          <Route path="cadastro" exact element={<LoginCreate />} />
          <Route path="recuperacao" exact element={<LoginPasswordLost />} />
          <Route
            path="redefinir-senha"
            exact
            element={<LoginPasswordReset />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </styleLogin.Forms>
    </styleLogin.LoginWraper>
  );
};

export default Login;
