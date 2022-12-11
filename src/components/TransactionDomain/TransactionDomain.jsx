import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionGroupAccordian from "./TransactionGroupAccordian/TransactionGroupAccordian";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  return (
    <>
      <TransactionHeader />
      <SearchBox />
      <TransactionOverview />
      <TransactionGroupAccordian transactions={[]} />
    </>
  );
}

export default TransactionDomain;
