import React from "react";
import TextField from "@mui/material/TextField";

function TransactionTextField() {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        fullWidth
        size="small"
      />
    </>
  );
}

export default TransactionTextField;
