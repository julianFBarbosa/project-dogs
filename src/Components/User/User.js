import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../../Components/NotFound";

const User = () => {
  return (
    <Container size={"50rem"}>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed title="Minha conta" />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default User;
