import React from "react";
import TransactionAccordion from "../TransactionAccordion/TransactionAccordion";

function TransactionGroupAccordion({ transactions, transactionTime }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <TransactionAccordion
        transactionType={"Income"}
        transactions={[3, 4, 5]}
        transactionTime={transactionTime}
      />
      <TransactionAccordion
        transactionType={"Expense"}
        transactions={[3, 4]}
        transactionTime={transactionTime}
      />
    </div>
  );
}

export default TransactionGroupAccordion;
