import React, { useEffect, useState } from "react";
import { PHOTO_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Error from "../Helper/Error";
import Input from "../Form/Input";
import { useNavigate } from "react-router-dom";
import * as styledUserPhotoPost from "./style/UserPhotoPost";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const token = window.localStorage.getItem("token");
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  };

  const handleImageChange = ({ target }) => {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  };

  return (
    <styledUserPhotoPost.section>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <styledUserPhotoPost.input
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <styledUserPhotoPost.preview
          style={{ backgroundImage: `url('${img.preview}')` }}
          alt="Preview"
        />
      )}
    </styledUserPhotoPost.section>
  );
};

export default UserPhotoPost;
