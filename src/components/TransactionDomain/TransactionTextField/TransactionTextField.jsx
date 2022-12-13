import React from "react";
import TextField from "@mui/material/TextField";

function TransactionTextField({
  transactionDescription,
  setTransactionDescription,
  transactionAmount,
  setTransactionAmount,
}) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        size="small"
        value={transactionDescription}
        onChange={(e) => setTransactionDescription(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        fullWidth
        size="small"
        type={"number"}
        value={transactionAmount}
        onChange={(e) => setTransactionAmount(e.target.value)}
      />
    </>
  );
}

export default TransactionTextField;
