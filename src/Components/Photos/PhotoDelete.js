import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import * as Delete from "./style/PhotoDelete";

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

export default PhotoDelete;
