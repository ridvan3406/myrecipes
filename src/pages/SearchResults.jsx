import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Search, { SearchButton as HomeButton } from "../components/Search";

const SearchResults = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/`);
  };

  const getSearchResults = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearchResults(params.search);
    console.log(params);
  }, [params.search]);

  return (
    <div>
      <Search />
      <SearchResult>Found ' {searchedRecipes.length} ' recipes</SearchResult>
      {searchedRecipes.length > 0 ? (
        <div>
          <Grid>
            {searchedRecipes.map((item) => {
              return (
                <Link to={"/recipe/" + item.id}>

                <Card key={item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                </Card>
                </Link>
              );
            })}
          </Grid>
        </div>
      ) : (
        <div>
          <SearchResult>Please search again</SearchResult>
          <HomeButton variant="contained" onClick={submitHandler}>
            Home Page
          </HomeButton>
        </div>
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
  padding-top: 1rem;
`;

export default SearchResults;
