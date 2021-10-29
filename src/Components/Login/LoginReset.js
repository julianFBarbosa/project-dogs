import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import * as styleLoginPasswordReset from "./style/LoginLost";
import { GlobalTitle } from "../../GlobalStyle";
import Error from "../Helper/Error";
import { useNavigate } from "react-router";

const LoginPasswordLost = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const { error, loading, request } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
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
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate("/login");
      }
    }
  };
  return (
    <styleLoginPasswordReset.wrapper>
      <GlobalTitle>Resete a senha</GlobalTitle>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      <Error error={error} />
    </styleLoginPasswordReset.wrapper>
  );
};

export default LoginPasswordLost;
