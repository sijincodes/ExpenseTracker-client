import React, { useEffect, useState } from "react";
import axios from "axios";

import "./TransactionForm.css";
import Toggle from "../Toggle/Toggle";
import Button from "./../../Button/Button";
import TransactionDropdown from "./../TransactionDropdown/TransactionDropdown";
import TransactionTextField from "./../TransactionTextField/TransactionTextField";
import { baseUrl } from "../../../consts";


function TransactionForm({
  hideForm,
  transactionList,
  setTransactionList,
  userSelectedDate,
}) {
  const [selectedCategory, setselectedCategory] = useState("");
  const [transactionToggle, setTransactionToggle] = useState("income");
  const [categories, setCategories] = useState([]);
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      transactionType: transactionToggle,
      transactionDescription: transactionDescription,
      transactionAmount: transactionAmount,
      categoryId: selectedCategory,
      TransactionCreatedDate: userSelectedDate.toISOString().split("T")[0],
    };
    if (
      transactionDescription === "" ||
      transactionAmount === 0 ||
      selectedCategory === ""
    ) {
      setError("Please provide all details");
    } else {
      const authToken = localStorage.getItem("authToken");
      const result = await axios.post(`${baseUrl}/transaction`, body, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (result.data) setTransactionList([...transactionList, body]);
      setTransactionDescription("");
      setTransactionAmount(0);
      setselectedCategory("");
    }

    // axios.post(`${baseUrl}/transaction`, body).then((response) => {
    //   setTransactionList([...transactionList, body]);
    // });

    //income/?month=11 not sure about transactiontime above
  };

  return (
    <div className="transactionFormContainer">
      <Toggle
        transactionToggle={transactionToggle}
        setTransactionToggle={setTransactionToggle}
      />
      <TransactionDropdown
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <TransactionTextField
        transactionDescription={transactionDescription}
        setTransactionDescription={setTransactionDescription}
        transactionAmount={transactionAmount}
        setTransactionAmount={setTransactionAmount}
      />
      {error && <span className="spanErrorMessage"> {error}</span>}
      <div className="transactionButtonContainer">
        <Button handleSubmit={hideForm} variant="outlined" text="CANCEL" />
        <Button variant="contained" text="ADD" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default TransactionForm;
