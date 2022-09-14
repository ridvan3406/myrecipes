import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./SearchResults";
import NotFoundPage from "./NotFoundPage";
import About from "./About";
import Converter from "./Converter";
import UnitSelect from "./UnitSelect";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} component />
      <Route path="/cuisine/:type" element={<Cuisine />} component />
      <Route path="/search/:search" element={<SearchResults />} component />
      <Route path="*" element={<NotFoundPage />} component/>
      <Route path="/about" element={<About />} component/>
      <Route path="/convert" element={<Converter />} component/>
    </Routes>
  );
};

export default Pages;
