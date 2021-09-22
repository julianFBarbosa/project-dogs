import React, { useContext, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import { ModalContext } from "./Feed";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photos/PhotoContent.js";
import styled from "styled-components";
import media from "styled-media-query";

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
    <Modal.container onClick={handleOutsiteClick}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <PhotoContent data={data} />}
    </Modal.container>
  );
};

const Modal = {
  container: styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 500;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    ${media.lessThan("40rem")`
      padding: 2rem calc(2rem + 15px) 2rem 2rem;
    `}
  `,
};

export default FeedModal;
