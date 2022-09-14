import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function UnitSelect({name,onChange}) {
  return (
    <div >
      <FormControl
        sx={{ m: 1, minWidth: 120}}
      >
        <InputLabel htmlFor="grouped-native-select">{name}</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Units"
          name={name}
          onChange={onChange}
        >
          <option aria-label="None" value="" />
          <optgroup label="Imperial">
            <option value={"lbs"}>pound</option>
            <option value={"oz"}>ounce</option>
            <option value={"gal"}>gallon</option>
            <option value={"pt"}>pint</option>
            <option value={"tb"}>tbsp</option>
          </optgroup>
          <optgroup label="Metric">
            <option value={"g"}>gram</option>
            <option value={"kg"}>kilogram</option>
            <option value={"l"}>litre</option>
            <option value={"ml"}>ml</option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
}
