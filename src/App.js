import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";

import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <ProtectedRoute path='conta/*' element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
