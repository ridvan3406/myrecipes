import React from "react";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Veggie from "../components/Veggie";

const Home = () => {
  return (
    <div>
      <Search/>
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
