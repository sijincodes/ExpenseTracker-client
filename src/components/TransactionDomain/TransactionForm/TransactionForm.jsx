import React from "react";

import "./TransactionForm.css";
import Toggle from "../Toggle/Toggle";
import Button from "./../../Button/Button";
import TransactionDropdown from "./../TransactionDropdown/TransactionDropdown";
import TransactionTextField from "./../TransactionTextField/TransactionTextField";

function TransactionForm({ hideForm }) {
  return (
    <div className="transactionFormContainer">
      <Toggle />
      <TransactionDropdown />
      <TransactionTextField />
      <div className="transactionButtonContainer">
        <Button handleSubmit={hideForm} variant="outlined" text="CANCEL" />
        <Button variant="contained" text="ADD" />
      </div>
    </div>
  );
}

export default TransactionForm;
