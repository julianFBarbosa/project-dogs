import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import ViewIcon from "../../Assets/visualizacao.svg";
import { ModalContext } from "./Feed";

const FeedItem = ({ photo }) => {
  const { modalPhoto, setModalPhoto } = useContext(ModalContext);

  const handleModalChange = useCallback(() => {
    setModalPhoto(photo)
  }, [modalPhoto]);

  return (
    <Item.item onClick={handleModalChange}>
      <Item.photo src={photo.src} alt={photo.title} />
      <Item.views background={ViewIcon}>{photo.acessos}</Item.views>
    </Item.item>
  );
};

const Item = {
  item: styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

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

  photo: styled.img`
    grid-area: 1/1;
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
