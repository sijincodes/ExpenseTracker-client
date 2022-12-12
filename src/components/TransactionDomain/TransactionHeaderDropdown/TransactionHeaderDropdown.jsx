import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./TransactionHeaderDropdown.css";
// theme.menu.containerBackgroundColor = '#303030';
function TransactionHeaderDropdown() {
  const [transaction, setTransaction] = React.useState("");

  const handleChange = (event) => {
    setTransaction(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="input-transaction-label-id">Transaction</InputLabel>
        <Select
          labelId="select-transaction-label-id"
          id="select-standard"
          value={transaction}
          onChange={handleChange}
          label="Transaction"
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: "#eee3df",
                },
              },
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Daily</MenuItem>
          <MenuItem value={2}>Monthly</MenuItem>
          <MenuItem value={3}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default TransactionHeaderDropdown;
