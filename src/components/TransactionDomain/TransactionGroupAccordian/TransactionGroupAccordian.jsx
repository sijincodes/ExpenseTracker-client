import React from "react";
import TransactionAccordian from "../TransactionAccordian/TransactionAccordian";

function TransactionGroupAccordian({ transactions }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <TransactionAccordian
        transactionType={"Income"}
        transactions={[3, 4, 5]}
      />
      <TransactionAccordian transactionType={"Expense"} transactions={[3, 4]} />
    </div>
  );
}

export default TransactionGroupAccordian;
