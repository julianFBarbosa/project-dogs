import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ViewIcon from "../../Assets/visualizacao.svg";
import Image from "../Helper/Image";
import { ModalContext } from "./Feed";

const FeedItem = ({ photo }) => {
  const { modalPhoto, setModalPhoto } = useContext(ModalContext);

  const handleModalChange = useCallback(() => {
    setModalPhoto(photo);
  }, [modalPhoto]);

  return (
    <Feed.item onClick={handleModalChange}>
      <Image src={photo.src} alt={photo.title} />
      <Feed.views background={ViewIcon}>{photo.acessos}</Feed.views>
    </Feed.item>
  );
};

const Feed = {
  item: styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
    grid-area: 1/1;

    &:nth-child(2) {
      grid-column: 2 / 4;
      grid-row: span 2;

      ${media.lessThan("40rem")`
        grid-column: initial;
        grid-row: initial;
      `}
    }

    &:hover {
      > span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `,

  views: styled.span`
    grid-area: 1/1;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    display: none;

    &:before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${(props) => props.background}) no-repeat;
    }
  `,
};

export default FeedItem;
