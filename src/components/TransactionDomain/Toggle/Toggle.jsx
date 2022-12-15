import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Toggle({ transactionToggle, setTransactionToggle }) {
  const handleToggle = (event) => {
    setTransactionToggle(event.target.value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={transactionToggle}
      exclusive
      onChange={handleToggle}
      aria-label="transaction Toggle"
      inputProps={{
        MenuProps: {
          MenuListProps: {
            sx: {
              backgroundColor: "#827397",
            },
          },
        },
      }}
    >
      <ToggleButton value="income">Income</ToggleButton>
      <ToggleButton value="expense">Expense</ToggleButton>
    </ToggleButtonGroup>
  );
}
