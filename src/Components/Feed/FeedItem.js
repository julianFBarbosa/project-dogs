import React from "react";

const FeedItem = ({ photo }) => {
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedItem;
