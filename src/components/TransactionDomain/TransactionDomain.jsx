import React, { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionGroupAccordion from "./TransactionGroupAccordion/TransactionGroupAccordion";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  const [transactionTime, setTransactionTime] = useState(1);
  const [transactionList, setTransactionList] = useState([]);
  const [userSelectedDate, setUserSelectedDate] = useState(new Date());

  return (
    <>
      <TransactionHeader
        transactionTime={transactionTime}
        setTransactionTime={setTransactionTime}
        transactionList={transactionList}
        setTransactionList={setTransactionList}
        userSelectedDate={userSelectedDate}
        setUserSelectedDate={setUserSelectedDate}
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
