import { Link, Route, Routes } from "react-router-dom";

import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";
import React from "react";

const Login = () => {
  return (
    <div>
      <p>oi</p>
      <nav>
        <Link to=''>raiz</Link>{" "}
        <Link to='cadastro'>cadastro</Link>{" "}
        <Link to='recuperacao'>recuperar</Link>{" "}
        <Link to='redefinir-senha'>redefinir</Link>{" "}
      </nav>
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
