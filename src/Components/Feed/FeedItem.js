import React, { useCallback, useContext } from "react";
import ViewIcon from "../../Assets/visualizacao.svg";
import Image from "../Helper/Image";
import { ModalContext } from "./Feed";
import * as styledFeedItem from './style/FeedItem';

const FeedItem = ({ photo }) => {
  const { modalPhoto, setModalPhoto } = useContext(ModalContext);

  const handleModalChange = useCallback(() => {
    setModalPhoto(photo);
  }, [modalPhoto]);

  return (
    <styledFeedItem.item onClick={handleModalChange}>
      <Image src={photo.src} alt={photo.title} />
      <styledFeedItem.views background={ViewIcon}>{photo.acessos}</styledFeedItem.views>
    </styledFeedItem.item>
  );
};

export default FeedItem;
