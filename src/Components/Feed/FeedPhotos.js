import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading.js";
import FeedItem from "./FeedItem.js";
import { GlobalTransition } from "../../GlobalStyle";
import styled from "styled-components";
import media from "styled-media-query";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    (async () => {
      const tempOptions = {
        page: 1,
        total: 6,
        user: 0,
      };
      const { url, options } = PHOTOS_GET(tempOptions);
      const { json } = await request(url, options);
    })();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Feed.list>
        {data.map((photo) => (
          <FeedItem photo={photo} key={photo.id} />
        ))}
      </Feed.list>
    );
  else return null;
};

const Feed = {
  list: styled.ul`
    animation: ${GlobalTransition} 0.3s;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;
    
    ${media.lessThan("40rem")`
      grid-template-columns: repeat(2, 1fr);
    `}
  `,
};

export default FeedPhotos;
