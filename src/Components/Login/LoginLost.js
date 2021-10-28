import React, { useEffect } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import * as styleLoginPasswordLost from "./style/LoginLost";
import useFetch from "../../Hooks/useFetch";
import { URL, PASSWORD_LOST } from "../../api";
import { GlobalTitle } from "../../GlobalStyle";
import Error from "../../Components/Helper/Error";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.validate()) {
      console.log("submit");
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${URL}/login/recuperar`,
      });
      request(url, options);
    }
  };

  return (
    <styleLoginPasswordLost.wrapper>
      <GlobalTitle>Perdeu a senha?</GlobalTitle>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </styleLoginPasswordLost.wrapper>
  );
};

export default LoginPasswordLost;
