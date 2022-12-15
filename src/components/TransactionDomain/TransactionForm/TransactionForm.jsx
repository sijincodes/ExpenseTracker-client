import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

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
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [transactionToggle, setTransactionToggle] = useState("income");
  const [categories, setCategories] = useState([]);
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

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
      enqueueSnackbar("Please provide all details", { variant: "error" });
    } else {
      const authToken = localStorage.getItem("authToken");
      const result = await axios.post(`${baseUrl}/transaction`, body, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (result.data) {
        body.categoryId = {
          _id: selectedCategory,
          categoryName: selectedCategoryName,
        };
        setTransactionList([...transactionList, body]);
      }
      setTransactionDescription("");
      setTransactionAmount(0);
      setselectedCategory("");
      enqueueSnackbar("Transaction created successfully", {
        variant: "success",
      });
    }
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
        setSelectedCategoryName={setSelectedCategoryName}
      />
      <TransactionTextField
        transactionDescription={transactionDescription}
        setTransactionDescription={setTransactionDescription}
        transactionAmount={transactionAmount}
        setTransactionAmount={setTransactionAmount}
      />

      <div className="transactionButtonContainer">
        <Button handleSubmit={hideForm} variant="outlined" text="CANCEL" />
        <Button variant="contained" text="ADD" handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default TransactionForm;
