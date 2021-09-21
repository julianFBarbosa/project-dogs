import React, { useContext, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { ModalContext } from "./Feed";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photos/PhotoContent.js";

const FeedModal = () => {
  const { modalPhoto } = useContext(ModalContext);
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(modalPhoto.id);
    request(url, options);
  }, [modalPhoto, request]);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
