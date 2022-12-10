import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  return (
    <>
      <TransactionHeader />
      <SearchBox />
      <TransactionOverview />
    </>
  );
}

export default TransactionDomain;
