import React, { useEffect } from "react";
import { useParams } from "react-router";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Container from "../Container";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import * as styledPhoto from "./style/Photo";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container margin="2rem auto 0">
        <PhotoContent single={true} data={data} />
      </Container>
    );
  else return null;
};

export default Photo;
