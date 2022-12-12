import React, { useEffect, useState } from "react";

import "./TransactionForm.css";
import Toggle from "../Toggle/Toggle";
import Button from "./../../Button/Button";
import TransactionDropdown from "./../TransactionDropdown/TransactionDropdown";
import TransactionTextField from "./../TransactionTextField/TransactionTextField";
import { baseUrl } from "../../../consts";
import axios from "axios";

function TransactionForm({ hideForm }) {
  const [transactionToggle, setTransactionToggle] = useState("income");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const authToken = localStorage.getItem("authToken");
      const result = await axios.get(
        `${baseUrl}/category?type=${transactionToggle}`,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      setCategories(result.data);
    };
    fetchCategories();
  }, [transactionToggle]);

  return (
    <div className="transactionFormContainer">
      <Toggle
        transactionToggle={transactionToggle}
        setTransactionToggle={setTransactionToggle}
      />
      <TransactionDropdown categories={categories} />
      <TransactionTextField />
      <div className="transactionButtonContainer">
        <Button handleSubmit={hideForm} variant="outlined" text="CANCEL" />
        <Button variant="contained" text="ADD" />
      </div>
    </div>
  );
}

export default TransactionForm;
