import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalTitle } from "../../GlobalStyle";
import PhotoComments from "./PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  console.log("comments", comments);
  return (
    <Item.photo>
      <Item.img src={photo.src} alt={photo.title} />
      <Item.details>
        <Item.author>
          <p>
            <Link to={`perfil/${photo.author}`}>@{photo.author}</Link>
            <Item.views>{photo.acessos}</Item.views>
          </p>
          <GlobalTitle>
            <Link to={`/foto${photo.id}`}>{photo.title}</Link>
          </GlobalTitle>
          <Item.attributes>
            <Item.attribute>{photo.peso} kg</Item.attribute>
            <Item.attribute>
              {photo.idade} {photo.idade <= 1 ? "ano" : "anos"}
            </Item.attribute>
          </Item.attributes>
        </Item.author>
      </Item.details>
      <PhotoComments id={photo.id} comments={comments} />
    </Item.photo>
  );
};


const Item = {
  photo: styled.div``,
  img: styled.img``,
  details: styled.div``,
  author: styled.div``,
  views: styled.span``,
  title: styled.h1``,
  attributes: styled.ul``,
  attribute: styled.li``,
};

export default PhotoContent;
