import React from "react";
import { Link } from "react-router-dom";
import NotFoundimage from "../images/404image.png";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const NotFoundPage = () => {
  return (
    <div className="container-div">
      <p>
        <h3 className="not-found-message">This page could not be found</h3>
        <Button variant="contained" href="/">
          Home Page
        </Button>
          <img src={NotFoundimage} className="center" alt="404-not-found" />
      </p>
    </div>
  );
};

export default NotFoundPage;
