import React from "react";
import TransactionAccordion from "../TransactionAccordion/TransactionAccordion";

function TransactionGroupAccordion({ transactions, transactionTime }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <TransactionAccordion
        transactionType={"Income"}
        transactions={transactions.filter(
          (transaction) => transaction.transactionType === "income"
        )}
        transactionTime={transactionTime}
      />
      <TransactionAccordion
        transactionType={"Expense"}
        transactions={transactions.filter(
          (transaction) => transaction.transactionType === "expense"
        )}
        transactionTime={transactionTime}
      />
    </div>
  );
}

export default TransactionGroupAccordion;
