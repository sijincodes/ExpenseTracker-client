import React from "react";
import TransactionAccordion from "../TransactionAccordion/TransactionAccordion";

function TransactionGroupAccordion({ transactions }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <TransactionAccordion
        transactionType={"Income"}
        transactions={[3, 4, 5]}
      />
      <TransactionAccordion transactionType={"Expense"} transactions={[3, 4]} />
    </div>
  );
}

export default TransactionGroupAccordion;
