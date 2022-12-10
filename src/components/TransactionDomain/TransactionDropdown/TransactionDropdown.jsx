import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TransactionDropdown() {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Category1</MenuItem>
          <MenuItem value={20}>Category2</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default TransactionDropdown;
