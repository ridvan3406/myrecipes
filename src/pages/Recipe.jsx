import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { SearchButton } from "../components/Search";

const Recipe = () => {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instruction");
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  console.log(details.title);
  for (const [key, value] of Object.entries(details)) {
    // console.log(`${key}: ${value}`);
  }
  return (
    <DetailWarepper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div style={{ display: "flex" }}>
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
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[0].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[1].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[2].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[3].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[4].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[5].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[6].original,
              }}
            ></li>
            <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[7].original,
              }}
            ></li>
             <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[8].original,
              }}
            ></li>
             <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[9].original,
              }}
            ></li>
             <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[10].original,
              }}
            ></li>
             <li
              dangerouslySetInnerHTML={{
                __html: details.extendedIngredients[11].original,
              }}
            ></li>
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
    line-height: 1rem;
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
  p{
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    margin-top: 0.5rem;
  }
`;

const Info = styled.div`
  margin-left: 3rem;
  margin-top: 2rem;
`;

export default Recipe;
