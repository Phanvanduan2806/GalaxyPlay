import React, { useState } from "react";
import "./Home.scss";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import DetailFilm from "./DetailFilm/DetailFilm";
function Home() {
  return (
    <>
      <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
          <Route exact path="/film" element={<Main></Main>} />
          <Route exact path="/detail/:name/:id" element={<DetailFilm></DetailFilm>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default Home;
