import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import {
  GlobalAnination,
  GlobalSubtitle,
  GlobalTitle,
} from "../../GlobalStyle";
import useForm from "../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../../Helper/Error";
import media from "styled-media-query";

const Form = styled.form`
  margin-bottom: 2rem;
`;
const RegisterWrapper = styled.div`
  margin-top: 4rem;
`;
const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const RegisterButton = styled(Button)``;
const FormSection = styled(GlobalAnination)``;
const Title = styled(GlobalTitle)``;
const Subtitle = styled(GlobalSubtitle)`
  color: #333;
`;
const ForgotLink = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <FormSection>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </Form>
      <ForgotLink to='recuperar'>Esqueci minha senha</ForgotLink>
      <RegisterWrapper>
        <Subtitle>Cadastre-se</Subtitle>
        <Description>
          Ainda não possui uma conta? Cadastre-se no site
        </Description>
      </RegisterWrapper>
      <RegisterButton to='cadastro' forwardedAs={Link}>
        Cadastro
      </RegisterButton>
    </FormSection>
  );
};

export default LoginForm;
