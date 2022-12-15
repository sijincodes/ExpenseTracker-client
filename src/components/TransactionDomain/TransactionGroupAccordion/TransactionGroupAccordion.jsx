import { style } from "@mui/system";
import React from "react";
import TransactionAccordion from "../TransactionAccordion/TransactionAccordion";

function TransactionGroupAccordion({
  transactions,
  transactionTime,
  setTransactionList,
}) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <TransactionAccordion
        transactionType={"Income"}
        transactions={transactions.filter(
          (transaction) => transaction.transactionType === "income"
         
        )}
        transactionTime={transactionTime}
        setTransactionList={setTransactionList}
      />
      <TransactionAccordion
        transactionType={"Expense"}
        transactions={transactions.filter(
          (transaction) => transaction.transactionType === "expense"
        )}
        transactionTime={transactionTime}
        setTransactionList={setTransactionList}
      />
    </div>
  );
}

export default TransactionGroupAccordion;
