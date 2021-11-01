import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Container from "../Container";
import { GlobalTitle } from "../../GlobalStyle";
import Head from "../Helper/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <Container>
      <Head title={user} />
      <GlobalTitle>{user}</GlobalTitle>
      <Feed user={user} />
    </Container>
  );
};

export default UserProfile;
