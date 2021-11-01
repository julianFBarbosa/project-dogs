import React from "react";
import Container from "./Container";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <Container size={"50rem"} margin="2rem auto 0">
      <Head
        title="Fotos"
        description="Home do Site Dogs, com o Feed de fotos"
      />
      <Feed />
    </Container>
  );
};

export default Home;
