import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Stack, TextField } from "@mui/material";
import SelectAllergens from "./SelectAllergen.jsx";
import SelectCuisine from "./SelectCuisine.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import SearchAuto from "./SearchAuto";

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInput(typeof value === "string" ? value.split(",") : value);
  };

  console.log(input, allergen, cuisineName);

  const [titles, setTitles] = useState([]);
  let params = useParams();

  const getSearchResultsTitles = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&${name}`
    );
    const recipes = await data.json();
    setTitles(recipes.results);
    console.log(recipes.results);
  };
  useEffect(() => {
    getSearchResultsTitles(params.search);
    console.log(params);
  }, [params.search]);

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
          {/* <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search recipe"
          /> */}
          <Stack spacing={2} sx={{ width: 300, margin: 1 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={titles.map((option) => option.title || "")}
              renderInput={(params) => (
                <TextField {...params} label="Search Recipe" />
              )}
              value={input}
                // onChange={(e) => setInput(e.target.value)}
            //   onChange={handleChange}
              type="text"
            />
          </Stack>
          {/* <SearchAuto input={input} setInput={setInput} /> */}
          <SelectAllergens allergen={allergen} setAllergen={setAllergen} />
          <SelectCuisine
            cuisineName={cuisineName}
            setCuisineName={setCuisineName}
          />
        </div>

        <Button variant="contained" onClick={submitHandler}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
