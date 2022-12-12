import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TransactionDropdown({ categories }) {
  const [selectedCategory, setselectedCategory] = useState("");

  const handleChange = (event) => {
    setselectedCategory(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Category"
          onChange={handleChange}
        >
          {categories.map((category) => {
            return (
              <MenuItem key={category._id} value={category._id}>
                {category.categoryName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default TransactionDropdown;
