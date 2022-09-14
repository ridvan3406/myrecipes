import React, { useState } from "react";
import "./converter.css";
import UnitSelect from "./UnitSelect";
import Qty from "js-quantities";
import {FormControl,TextField } from "@mui/material";
import { SearchButton } from "../components/Search";
import SearchResult from "./SearchResults";

export default function Converter() {
  const [inputValue, updateInputValue] = useState();
  const [unit1, setUnit1] = useState();
  const [unit2, setUnit2] = useState();
  const [result, setResult] = useState();
  const [notificationClass, setNotificationClass] = useState();

  const handleInputChange = (event) => {
    const val = event.target.value;
    updateInputValue(val);
  };

  const unitSelect = (event) => {
    const unit = event.target.value;
    const name = event.target.name;
    if (name === "To") {
      setUnit2(unit);
    } else if (name === "From") {
      setUnit1(unit);
    }
  };

  const conversion = () => {
    if (inputValue !== undefined) {
      if (unit1 !== undefined && unit2 !== undefined) {
        const qtyString = inputValue + unit1;
        const qty = new Qty(qtyString);
        const resultNum = qty.to(unit2);
        const result = inputValue + unit1 + "  is equal to " + resultNum;
        console.log(resultNum.scalar.toFixed(2))
        setResult(result);
        setNotificationClass("result");
      } else {
        setNotificationClass("invalidResult");
        setResult("Please select both units!");
      }
    } else {
      setNotificationClass("invalidResult");
      setResult("Please enter an amount to convert");
    }
  };

  return (
    <div>
      <p className="measure">Measurement Converter</p>
      <FormControl
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <UnitSelect name="From" onChange={unitSelect} />
        <UnitSelect name="To" onChange={unitSelect} />
        </div>
        <SearchButton onClick={conversion}>CONVERT</SearchButton>
        <span className={notificationClass}>{result}</span>
      </FormControl>
    </div>
  );
}
