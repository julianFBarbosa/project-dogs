import React, { useEffect, useState } from "react";
import { TOKEN_POST, USER_GET } from "../../api";

import Button from "../Form/Button";
import Input from "../Form/Input";
import { Link } from "react-router-dom";
import useForm from "../Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const getUserFromLocalStorage = async token => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("json", json);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUserFromLocalStorage(token);
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      try {
        const request = await fetch(url, options);
        const fetchedJSON = await request.json();
        window.localStorage.setItem("token", fetchedJSON.token);
        getUserFromLocalStorage(fetchedJSON.token);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label='usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to='cadastro'>Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
