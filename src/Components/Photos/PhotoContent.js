import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ViewIcon from "../../Assets/visualizacao-black.svg";
import { GlobalTitle } from "../../GlobalStyle";
import { UserContext } from "../../UserContext";
import Image from "../Helper/Image";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import * as Item from "./style/PhotoContent";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);

  const { photo, comments } = data;
  
  return (
    <Item.photo single={single}>
      <Item.image single={single}>
        <Image src={photo.src} alt={photo.title} />
      </Item.image>
      <Item.details single={single}>
        <Item.author>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Item.link to={`perfil/${photo.author}`}>@{photo.author}</Item.link>
          )}
          <Item.views background={ViewIcon}>{photo.acessos}</Item.views>
        </Item.author>
        <GlobalTitle>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </GlobalTitle>
        <Item.attributes>
          <Item.attribute>{photo.peso} kg</Item.attribute>
          <Item.attribute>
            {photo.idade} {photo.idade < 2 ? "ano" : "anos"}
          </Item.attribute>
        </Item.attributes>
      </Item.details>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </Item.photo>
  );
};

export default PhotoContent;
