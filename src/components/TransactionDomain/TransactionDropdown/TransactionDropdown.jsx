import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TransactionDropdown({
  categories,
  selectedCategory,
  setselectedCategory,
}) {
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
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: "white"
                 
                  
                },
              },
            },
          }}
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
