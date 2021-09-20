import React from "react";
import Container from "./Container";
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <Container size={"40rem"} margin="4rem auto 0">
      <Feed />
    </Container>
  );
};

export default Home;
