import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./SearchResults";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} component />
      <Route path="/cuisine/:type" element={<Cuisine />} component />
      <Route path="/search/:search" element={<SearchResults />} component />
    </Routes>
  );
};

export default Pages;
