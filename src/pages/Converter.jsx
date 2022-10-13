import React, { useState } from "react";
import "./converter.css";
import UnitSelect from "./UnitSelect";
import Qty from "js-quantities";
import { FormControl, TextField } from "@mui/material";
import { SearchButton } from "../components/Search";

export default function Converter() {
  const [inputValue, updateInputValue] = useState();
  const [unit1, setUnit1] = useState();
  const [unit2, setUnit2] = useState();
  const [result, setResult] = useState();
  const [notificationClass, setNotificationClass] = useState();

  const handleInputChange = (event) => {
    const val = event.target.value;
    updateInputValue(val);
    console.log(val)
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
    if (inputValue !== undefined || inputValue === null) {
      try {
        if (unit1 !== undefined && unit2 !== undefined) {
          const qtyString = inputValue + unit1;
          const qty = new Qty(qtyString);
          const resultNum = qty.to(unit2);
          const result = inputValue + " " + unit1+ "  is equal to " + resultNum.scalar.toFixed(2) + unit2;
          console.log(resultNum.scalar.toFixed(2));
          setResult(result);
          setNotificationClass("result");
        } else {
          setNotificationClass("invalidResult");
          setResult("Please select both units!");
        }
      } catch (error) {
        setNotificationClass("invalidResult");
        setResult(unit1 + "  can not be converted to " + unit2);
      }
    }else{
      setNotificationClass("invalidResult");
      setResult("Enter an amount to convert");
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
          marginTop:50,
        }}
      >
        <div
          style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            // onInputChange={e.target.value}
            sx={{margin:1,width:200}}
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
