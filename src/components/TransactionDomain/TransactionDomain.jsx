import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBox from "./SearchBox/SearchBox";
import TransactionGroupAccordion from "./TransactionGroupAccordion/TransactionGroupAccordion";
import TransactionHeader from "./TransactionHeader/TransactionHeader";
import TransactionOverview from "./TransactionOverview/TransactionOverview";
import { baseUrl } from "../../consts";

function TransactionDomain() {
  const [transactionTime, setTransactionTime] = useState(1);
  const [transactionList, setTransactionList] = useState([]);
  const [userSelectedDate, setUserSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTransactionList = transactionList.filter((elm) => {
    return elm.transactionDescription
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  function generateTransactionFetchURL(transactionTime, userSelectedDate) {
    const selectedDate = userSelectedDate.toISOString().split("T")[0];
    const selectedYear = userSelectedDate.toLocaleDateString("en-US", {
      year: "numeric",
    });
    const selectedMonth = userSelectedDate.toLocaleString("en-us", {
      month: "long",
    });
    let params = "";
    switch (transactionTime) {
      case 2:
        params = `TransactionCreatedMonth=${selectedMonth}&TransactionCreatedYear=${selectedYear}`;
        break;
      case 3:
        params = `TransactionCreatedYear=${selectedYear}`;
        break;
      default:
        params = `TransactionCreatedDate=${selectedDate}`;
    }
    return `${baseUrl}/transaction?${params}`;
  }

  useEffect(() => {
    const fetchTransactions = async () => {
      const url = generateTransactionFetchURL(
        transactionTime,
        userSelectedDate
      );
      const authToken = localStorage.getItem("authToken");
      const result = await axios.get(url, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setTransactionList(result.data);
    };
    fetchTransactions();
  }, [transactionTime, userSelectedDate, setTransactionList]);

  return (
    <>
      <TransactionHeader
        transactionTime={transactionTime}
        setTransactionTime={setTransactionTime}
        transactionList={filteredTransactionList}
        setTransactionList={setTransactionList}
        userSelectedDate={userSelectedDate}
        setUserSelectedDate={setUserSelectedDate}
      />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TransactionOverview transactions={filteredTransactionList} />
      <TransactionGroupAccordion
        transactions={filteredTransactionList}
        transactionTime={transactionTime}
        setTransactionList={setTransactionList}
      />
    </>
  );
}

export default TransactionDomain;
