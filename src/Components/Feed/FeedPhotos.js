import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading.js";
import FeedItem from "./FeedItem.js";
import * as styledFeedPhotos from './style/FeedPhotos';

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
      <styledFeedPhotos.list>
        {data.map((photo) => (
          <FeedItem photo={photo} key={photo.id} />
        ))}
      </styledFeedPhotos.list>
    );
  else return null;
};

export default FeedPhotos;
