import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Toggle() {
  const [transactionToggle, setTransactionToggle] = React.useState("income");

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
    >
      <ToggleButton value="income">Income</ToggleButton>
      <ToggleButton value="expense">Expense</ToggleButton>
    </ToggleButtonGroup>
  );
}
