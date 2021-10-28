import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import * as styleLoginPasswordReset from "./style/LoginLost";
import { GlobalTitle } from "../../GlobalStyle";

const LoginPasswordLost = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const { error, loading, request } = useFetch();
    const key = params.get("key");
    const login = params.get("login");

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  const handleSubmit = async (event) => {
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    request(url, options);
  };
  return (
    <styleLoginPasswordReset.wrapper>
      <GlobalTitle>Mot de passe oublié</GlobalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Resetar</Button>
      </form>
    </styleLoginPasswordReset.wrapper>
  );
};

export default LoginPasswordLost;
