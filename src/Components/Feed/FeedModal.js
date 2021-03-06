import React, { useContext, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { ModalContext } from "./Feed";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photos/PhotoContent.js";
import * as styledFeedModal from './style/FeedModal';

const FeedModal = () => {
  const { modalPhoto, setModalPhoto } = useContext(ModalContext);
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(modalPhoto.id);
    request(url, options);
  }, [modalPhoto, request]);

  const handleOutsiteClick = evt => {
    if (evt.target === evt.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <styledFeedModal.container onClick={handleOutsiteClick}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} />}
    </styledFeedModal.container>
  );
};

export default FeedModal;
