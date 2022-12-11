import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionGroupAccordion from "./TransactionGroupAccordion/TransactionGroupAccordion";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  return (
    <>
      <TransactionHeader />
      <SearchBox />
      <TransactionOverview />
      <TransactionGroupAccordion transactions={[]} />
    </>
  );
}

export default TransactionDomain;
