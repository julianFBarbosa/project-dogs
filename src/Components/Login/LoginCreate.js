import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../Helper/Error";
import { USER_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import * as styleLoginCreate from "./style/LoginCreate";

const LoginCreate = () => {
  const username = useForm();
  const password = useForm("password");
  const email = useForm("email");

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  };

  return (
    <styleLoginCreate.FormSection>
      <styleLoginCreate.Title>Cadastre-se</styleLoginCreate.Title>
      <styleLoginCreate.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </styleLoginCreate.Form>
    </styleLoginCreate.FormSection>
  );
};

export default LoginCreate;
