import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./SearchResults";
import NotFoundPage from "./NotFoundPage";
import About from "./About";
import Converter from "./Converter";
import Recipe from "./Recipe";
import LeftNav from "./LeftNav";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} component />
      <Route path="/cuisine/:type" element={<Cuisine />} component />
      <Route path="/search/:search" element={<SearchResults />} component />
      <Route path="*" element={<NotFoundPage />} component/>
      <Route path="/about" element={<About />} component/>
      <Route path="/convert" element={<Converter />} component/>
      <Route path="/recipe/:name" element={<Recipe />} component/>
    </Routes>
  );
};

export default Pages;
