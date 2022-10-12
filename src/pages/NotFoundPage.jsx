import React from "react";
import NotFoundimage from "../images/404image.png";
import {SearchButton } from "../components/Search";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/`);
  };
  return (
    <div className="container-div">
      <p>
        <h3 className="not-found-message">This page could not be found</h3>
        <SearchButton variant="contained" onClick={clickHandler}>
          Home Page
        </SearchButton>
          <img src={NotFoundimage} className="center" alt="404-not-found" />
      </p>
    </div>
  );
};

export default NotFoundPage;
