import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
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
