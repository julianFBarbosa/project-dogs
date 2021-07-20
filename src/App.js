import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";

import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login/Login";

const ContentWrapper = styled.div`
  max-width: var(--container-width);
  padding: 0 1rem;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
          <GlobalStyle />
        </UserStorage>
      </BrowserRouter>
    </ContentWrapper>
  );
};

export default App;
