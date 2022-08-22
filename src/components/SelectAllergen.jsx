import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import './style.css'

const allergens = [
  "Dairy",
  "Egg",
  "Gluten",
  "Grain",
  "Peanut",
  "Seafood",
  "Sesame",
  "Shellfish",
  "Soy",
  "Sulfite",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectAllergens({allergen, setAllergen}) {

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllergen(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select allergen</InputLabel>
        <Select
          className="select"
          style={{ width:300}}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={allergen}
          onChange={handleChange}
          input={<OutlinedInput label="Select allergen" style={{border:"1px solid black"}}/>}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {allergens.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={allergen.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
