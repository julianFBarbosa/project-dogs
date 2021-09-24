import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import ViewIcon from "../../Assets/visualizacao-black.svg";
import { GlobalTitle } from "../../GlobalStyle";
import { UserContext } from "../../UserContext";
import Image from "../Helper/Image";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);

  const { photo, comments } = data;
  
  return (
    <Item.photo>
      <Item.image>
        <Image src={photo.src} alt={photo.title} />
      </Item.image>
      <Item.details>
        <Item.author>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Item.link to={`perfil/${photo.author}`}>@{photo.author}</Item.link>
          )}
          <Item.views background={ViewIcon}>{photo.acessos}</Item.views>
        </Item.author>
        <GlobalTitle>
          <Link to={`/foto${photo.id}`}>{photo.title}</Link>
        </GlobalTitle>
        <Item.attributes>
          <Item.attribute>{photo.peso} kg</Item.attribute>
          <Item.attribute>
            {photo.idade} {photo.idade < 2 ? "ano" : "anos"}
          </Item.attribute>
        </Item.attributes>
      </Item.details>
      <PhotoComments id={photo.id} comments={comments} />
    </Item.photo>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Item = {
  photo: styled.div`
    animation: ${fadeIn} 0.3s;
    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;
    background: #fff;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    ${media.lessThan("64rem")`
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
      grid-template-columns: minmax(20rem, 40rem);
    `}
  `,
  image: styled.div`
    grid-row: 1/4;
    ${media.lessThan("64rem")`
      grid-row: 1;
    `}
  `,
  details: styled.div`
    padding: 2rem 2rem 0;
  `,
  author: styled.p`
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  `,
  views: styled.span`
    &:before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.5rem;
      background-image: url(${(props) => props.background});
    }
  `,
  link: styled(Link)`
    &:hover {
      text-decoration: underline;
    }
  `,
  attributes: styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `,
  attribute: styled.li`
    margin-right: 2rem;

    &:before {
      content: "";
      display: inline-block;
      height: 20px;
      margin: 5px 0.5rem 0 0;
      position: relative;
      top: 3px;
      width: 2px;
      background: #000;
    }
  `,
};

export default PhotoContent;
