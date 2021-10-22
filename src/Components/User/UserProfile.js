import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Container from "../Container";
import { GlobalTitle } from "../../GlobalStyle";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <Container>
      <GlobalTitle>{user}</GlobalTitle>
      <Feed user={user} />
    </Container>
  );
};

export default UserProfile;
