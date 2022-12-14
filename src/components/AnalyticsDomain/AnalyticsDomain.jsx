import React, { useEffect, useState } from "react";
import axios from "axios";
import AnalyticsGroupCategoryPieCard from "./AnalyticsGroupCategoryPieCard/AnalyticsGroupCategoryPieCard";
import AnalyticsGroupGraphCard from "./AnalyticsGroupGraphCard/AnalyticsGroupGraphCard";
import AnalyticsHeader from "./AnalyticsHeader/AnalyticsHeader";
import { baseUrl } from "../../consts";

function AnalyticsDomain({
  transactionTime,
  userSelectedDate,
  transactionList,
}) {
  const [expenseList, setExpenseList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  function refactorOverviewResult(overviewList) {
    return overviewList.map((overview) => {
      let overviewMonth = new Date(overview._id).toLocaleDateString("en-US", {
        month: "short",
      });
      let overviewDay = new Date(overview._id).toLocaleDateString("en-US", {
        day: "numeric",
      });
      return { ...overview, _id: overviewDay + overviewMonth };
    });
  }

  useEffect(() => {
    const fetchOverviewAnalytics = async () => {
      let incomeBarUrl;
      let expenseBarUrl;
      const selectedYear = userSelectedDate.toLocaleDateString("en-US", {
        year: "numeric",
      });
      const selectedMonth = userSelectedDate.toLocaleString("en-us", {
        month: "long",
      });
      const authToken = localStorage.getItem("authToken");

      if (transactionTime === 3) {
        incomeBarUrl = `${baseUrl}/analysis/totalExpense/income?TransactionCreatedYear=${selectedYear}`;
        expenseBarUrl = `${baseUrl}/analysis/totalExpense/expense?TransactionCreatedYear=${selectedYear}`;
      } else {
        incomeBarUrl = `${baseUrl}/analysis/overview/income?TransactionCreatedMonth=${selectedMonth}&TransactionCreatedYear=${selectedYear}`;
        expenseBarUrl = `${baseUrl}/analysis/overview/expense?TransactionCreatedMonth=${selectedMonth}&TransactionCreatedYear=${selectedYear}`;
      }

      let expensesOverview = await axios.get(expenseBarUrl, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      let incomeOverview = await axios.get(incomeBarUrl, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (transactionTime !== 3) {
        expensesOverview = refactorOverviewResult(expensesOverview.data);
        incomeOverview = refactorOverviewResult(incomeOverview.data);
        setExpenseList(expensesOverview);
        setIncomeList(incomeOverview);
      } else {
        setExpenseList(expensesOverview.data);
        setIncomeList(incomeOverview.data);
      }
    };
    fetchOverviewAnalytics();
  }, [userSelectedDate, transactionTime, transactionList]);

  return (
    <>
      <AnalyticsHeader
        header={transactionTime === 3 ? "Yearly Overview" : "Monthly Overview"}
      />
      <AnalyticsGroupGraphCard
        incomeList={incomeList}
        expenseList={expenseList}
      />
      <AnalyticsHeader
        header={
          transactionTime === 3
            ? "Yearly Expenses By Category"
            : "Monthly Expenses By Category"
        }
      />
      <AnalyticsGroupCategoryPieCard
        userSelectedDate={userSelectedDate}
        transactionList={transactionList}
        transactionTime={transactionTime}
      />
    </>
  );
}

export default AnalyticsDomain;
