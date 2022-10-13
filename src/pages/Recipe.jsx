import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { SearchButton } from "../components/Search";

const Recipe = () => {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instruction");
  let params = useParams();
  // const fetchDetails = async () => {
  //   const data = await fetch(
  //     `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  //   );
  //   const detailData = await data.json();
  //   setDetails(detailData);
  //   console.log(detailData);
  // };
  // useEffect(() => {
  //   fetchDetails();
  // }, [params.name]);
  console.log(details.title);
  console.log(details.extendedIngredients);
  return (
    <DetailWarepper>
      <div style={{ display: "inline-grid" }}>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <span dangerouslySetInnerHTML={{ __html: details.summary }} />
      </div>
      <Info>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <SearchButton
            variant="contained"
            onClick={() => setActiveTab("instruction")}
            className={activeTab === "instruction" ? "active" : ""}
          >
            Instruction
          </SearchButton>
          <SearchButton
            variant="contained"
            onClick={() => setActiveTab("ingredients")}
            className={activeTab === "ingredients" ? "active" : ""}
          >
            Ingredients
          </SearchButton>
        </div>

        {activeTab === "instruction" && (
          <div>
            <span dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWarepper>
  );
};

const DetailWarepper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #f27121, #e94057);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    font-weight: 400;
    margin-top: 0.5rem;
  }
  ul {
    margin-top: 1rem;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
  }
  span {
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
    margin-top: 1rem;
    width: 35rem;
    line-height: 1.5rem;
  }
`;

const Info = styled.div`
  margin-left: 3rem;
  margin-top: 4rem;
`;

export default Recipe;
