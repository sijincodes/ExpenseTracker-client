import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionCard from "./TransactionCard/TransactionCard";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";

function TransactionDomain() {
  return (
    <>
      <TransactionHeader />
      <SearchBox />
      <TransactionOverview />
      <TransactionCard />
    </>
  );
}

export default TransactionDomain;
