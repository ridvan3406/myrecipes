import React from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
