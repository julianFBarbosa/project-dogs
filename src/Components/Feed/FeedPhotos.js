import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading.js";
import FeedItem from "./FeedItem.js";

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
      <ul>
        {data.map((photo) => (
          <FeedItem photo={photo} key={photo.id} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
