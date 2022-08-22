import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import SelectAllergens from "./SelectAllergen.jsx";
import SelectCuisine from "./SelectCuisine.jsx";

const Search = () => {
  const [input, setInput] = useState("");
  const [allergen, setAllergen] = React.useState([]);
  const [cuisineName, setCuisineName] = React.useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ridvan");
    navigate(`/search/query=${input}&intolarence=${allergen.join(',')}&cuisine=${cuisineName.join(',')}`);
  };
console.log(input,allergen,cuisineName)
  return (
    <FormStyle onSubmit={submitHandler}>
      <div
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search recipe"
        />
        
        <SelectAllergens allergen={allergen} setAllergen={setAllergen}/>
        <SelectCuisine cuisineName={cuisineName} setCuisineName={setCuisineName}/>
        <button onClick={submitHandler}>search</button>
      </div>
    
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 0rem;
  display: inline-flex;
  justify-content: center;
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: 1px solid black;
    background: white;
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border-radius: 5px;
    outline: none;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-width: 20rem;
    height: 60px;
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
    }
  }
`;

const SearchField = styled.input`
  border: 1px solid black;
  background: white;
  font-size: 1.5rem;
  color: black;
  padding: 1rem 3rem;
  border-radius: 5px;
  outline: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  height: 60px;
`;

export default Search;
