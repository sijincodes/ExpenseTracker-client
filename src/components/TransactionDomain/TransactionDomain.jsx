import React, { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionGroupAccordion from "./TransactionGroupAccordion/TransactionGroupAccordion";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  const [transactionTime, setTransactionTime] = useState(1);
  return (
    <>
      <TransactionHeader
        transactionTime={transactionTime}
        setTransactionTime={setTransactionTime}
      />
      <SearchBox />
      <TransactionOverview />
      <TransactionGroupAccordion
        transactions={[]}
        transactionTime={transactionTime}
      />
    </>
  );
}

export default TransactionDomain;
