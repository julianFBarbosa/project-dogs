import { Navigate, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (!!login) return <Navigate to="/conta" />
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<LoginForm />} />
        <Route path='cadastro' exact element={<LoginCreate />} />
        <Route path='recuperacao' exact element={<LoginPasswordLost />} />
        <Route path='redefinir-senha' exact element={<LoginPasswordReset />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Login;
