import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TransactionHeaderDropdown({ transactionTime, setTransactionTime }) {
  const handleChange = (event) => {
    setTransactionTime(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="input-transaction-label-id">Transaction</InputLabel>
        <Select
          labelId="select-transaction-label-id"
          id="select-standard"
          value={transactionTime}
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
          <MenuItem value={1}>Daily</MenuItem>
          <MenuItem value={2}>Monthly</MenuItem>
          <MenuItem value={3}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default TransactionHeaderDropdown;
