import React from "react";
import styled from "styled-components";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem certeza de que deseja deletar?");
    
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = request(url, options);

      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <Delete.button disabledw>Deletar</Delete.button>
      ) : (
        <Delete.button onClick={handleClick}>Deletar</Delete.button>
      )}
    </>
  );
};

const Delete = {
  button: styled.button`
    background: #ddd;
    padding: 0.3rem 0.6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: 0.875rem;
    font-family: var(--primary-type);
    cursor: pointer;
    border-radius: 0.4rem;
    transition: 0.1s;

    &:hover,
    &:focus {
      outline: none;
      background: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
    }
  `,
};

export default PhotoDelete;
