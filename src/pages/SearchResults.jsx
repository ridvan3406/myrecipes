import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const SearchResults = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearchResults = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.results)
    console.log(recipes.results.length);
  };
  useEffect(() => {
    getSearchResults(params.search);
    console.log(params);
  }, [params.search]);

  return (
    <div>
      <SearchResult>Found {searchedRecipes.length} recipes</SearchResult>
      {searchedRecipes.length > 0 ? (
        <div>
          <Grid>
            {searchedRecipes.map((item) => {
              return (
                <Card key={item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                </Card>
              );
            })}
          </Grid>
        </div>
      ) : (
        <Button variant="contained" href="/">
          Home Page
        </Button>
      )}
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
const SearchResult = styled.p`
  text-align: left;
  padding-bottom: 2rem;
  font-size: 1.5rem;
`;

export default SearchResults;
