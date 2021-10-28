import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginLost";
import LoginPasswordReset from "./LoginReset";
import NotFound from "../NotFound";
import { UserContext } from "../../UserContext";
import * as styleLogin from "./style/Login";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <styleLogin.LoginWraper>
      <styleLogin.Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="recuperar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </styleLogin.Forms>
    </styleLogin.LoginWraper>
  );
};

export default Login;
