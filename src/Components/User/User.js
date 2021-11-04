import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../Container";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../../Components/NotFound";
import { UserContext } from "../../UserContext";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <Container size={"50rem"}>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed title="Minha conta" user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default User;
