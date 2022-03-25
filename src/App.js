import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home.js";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Photo from "./Components/Photos/Photo";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import UserProfile from "./Components/User/UserProfile";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/login/*" element={<Login />} />
              <Route exact path="/foto/:id" element={<Photo />} />
              <Route exact path="/perfil/:user" element={<UserProfile />} />
              <ProtectedRoute exact path="conta/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <GlobalStyle />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
