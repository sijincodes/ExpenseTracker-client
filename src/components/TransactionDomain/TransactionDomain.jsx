import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TransactionHeader from "./TransactionHeader/TransactionHeader";

function TransactionDomain() {
  return (
    <>
      <TransactionHeader />
      <SearchBox />
    </>
  );
}

export default TransactionDomain;
