import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import Input from "../Form/Input";
import * as styleLoginForm from "./style/LoginForm";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <styleLoginForm.FormSection>
      <Head title="Login" />
      <styleLoginForm.Title>Login</styleLoginForm.Title>
      <styleLoginForm.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <styleLoginForm.RegisterButton disabled>
            Carregando...
          </styleLoginForm.RegisterButton>
        ) : (
          <styleLoginForm.RegisterButton>Entrar</styleLoginForm.RegisterButton>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </styleLoginForm.Form>
      <styleLoginForm.ForgotLink to="perdeu">
        Esqueci minha senha
      </styleLoginForm.ForgotLink>
      <styleLoginForm.RegisterWrapper>
        <styleLoginForm.Subtitle>Cadastre-se</styleLoginForm.Subtitle>
        <styleLoginForm.Description>
          Ainda não possui uma conta? Cadastre-se no site
        </styleLoginForm.Description>
        <styleLoginForm.RegisterButton to="cadastro" forwardedAs={Link}>
          Cadastro
        </styleLoginForm.RegisterButton>
      </styleLoginForm.RegisterWrapper>
    </styleLoginForm.FormSection>
  );
};

export default LoginForm;
