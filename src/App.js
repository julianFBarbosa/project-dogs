import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import React from "react";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-type: Helvetica, Arial, sans-serif;
    --secondary-type: 'Spectral', Georgia;
    --container-width: 50rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }
  
  body {
    margin: 0px;
    padding: 4rem 0 0;
    font-family: var(--primary-type);
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--primary-type)
  }
`;

const ContentWrapper = styled.div`
  max-width: var(--container-width);
  padding: 0 1rem;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ContentWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </BrowserRouter>
    </ContentWrapper>
  );
};

export default App;
