import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {Stack, TextField } from "@mui/material";
import SelectAllergens from "./SelectAllergen.jsx";
import SelectCuisine from "./SelectCuisine.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import "./Navbar.css";
import "./style.css";

export const SearchButton = styled.button`
  margin-right: 2px;
  background-color: #1f5156;
  color: #f5b921;
  border: 1px solid #1f5156;
  border-radius: 5px;
  height: 40px;
  width: 150px;
  min-width: 100px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    color: #1f5156;
    background-color: #f5b921;
    border: 1px solid #f5b921;
  }
`;
export const ResetButton = styled(SearchButton)`
  background-color: #cbc9c9;
  color: #ffffff;
  border: 1px solid #808080;
  
  &:hover {
    color: #1f5156;
    background-color: #f5b921;
    border: 1px solid #f5b921;
  }
`;


const Search = () => {
  const [input, setInput] = useState("");
  const [allergen, setAllergen] = React.useState([]);
  const [cuisineName, setCuisineName] = React.useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(
      `/search/query=${input}&intolarence=${allergen.join(
        ","
      )}&cuisine=${cuisineName.join(",")}`
    );
  };

  const resetHandler = (e) => {
    setInput("");
    setAllergen([]);
    setCuisineName([]);
    console.log("reset");
    e.preventDefault();
    navigate(
      `/search/query=&intolarence=&cuisine=`
    );
  };

  // console.log(input, allergen, cuisineName);

  const [titles, setTitles] = useState([]);
  // let params = useParams();

  // const getSearchResultsTitles = async (name) => {
  //   const data = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&${name}`
  //   );
  //   const recipes = await data.json();
  //   setTitles(recipes.results);
  // };
  // useEffect(() => {
  //   getSearchResultsTitles(params.search);
  //   console.log(params);
  // }, [params.search])

  return (
    <div onSubmit={submitHandler}>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2} sx={{ width: 300, margin: 1 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={titles.map((option) => option.title || "")}
              renderInput={(params) => (
                <TextField {...params} label="Search Recipe" />
              )}
              value={input}
              type="search"
              onChange={(event, value) => {
                setInput(value, event);
              }}
              //   onInputChange={(event,value) =>{setInput(value, event)}}
            />
          </Stack>
          <SelectAllergens allergen={allergen} setAllergen={setAllergen} />
          <SelectCuisine
            cuisineName={cuisineName}
            setCuisineName={setCuisineName}
          />
        </div>
        <Box display="flex">
          <SearchButton variant="contained" onClick={submitHandler}>
            Search
          </SearchButton>
          <ResetButton variant="contained" onClick={resetHandler}>
            Reset
          </ResetButton>
        </Box>
      </div>
    </div>
  );
};

export default Search;
