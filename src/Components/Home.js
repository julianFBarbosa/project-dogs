import React from "react";
import Container from "./Container";
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <Container size={"50rem"} margin="2rem auto 0">
      <Feed />
    </Container>
  );
};

export default Home;
