import React, { useEffect, useState } from "react";
import axios from "axios";
import AnalyticsCategoryPieCard from "../AnalyticsCategoryPieCard/AnalyticsCategoryPieCard";
import { baseUrl } from "../../../consts";

function AnalyticsGroupCategoryPieCard({
  userSelectedDate,
  transactionList,
  transactionTime,
}) {
  const [categoriesAnalysis, setCategoriesAnalysis] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  useEffect(() => {
    const fetchCategoriesAnalytics = async () => {
      const selectedYear = userSelectedDate.toLocaleDateString("en-US", {
        year: "numeric",
      });
      const selectedMonth = userSelectedDate.toLocaleString("en-us", {
        month: "long",
      });
      const authToken = localStorage.getItem("authToken");
      let categoryAnalysisUrl;
      if (transactionTime === 3) {
        categoryAnalysisUrl = `${baseUrl}/analysis/categories/year?TransactionCreatedYear=${selectedYear}`;
      } else {
        categoryAnalysisUrl = `${baseUrl}/analysis/categories/month?TransactionCreatedMonth=${selectedMonth}&TransactionCreatedYear=${selectedYear}`;
      }
      let categoriesOverview = await axios.get(categoryAnalysisUrl, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      setCategoriesAnalysis(categoriesOverview.data);

      let totalData = await axios.get(
        `${baseUrl}/analysis/totalExpense/expense?TransactionCreatedYear=${selectedYear}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (transactionTime !== 3) {
        setTotalExpense(
          totalData.data.filter((total) => total._id === selectedMonth)[0].total
        );
      } else {
        setTotalExpense(
          totalData.data.reduce(
            (acc, current) => acc + Number(current.total),
            0
          )
        );
      }
    };
    fetchCategoriesAnalytics();
  }, [userSelectedDate, transactionList, transactionTime]);

  return (
    <div style={{ paddingTop: "20px" }}>
      {categoriesAnalysis.map((category) => {
        return (
          <AnalyticsCategoryPieCard
            key={category._id}
            pie={"pie"}
            category={category._id}
            amount={category.total}
            percent={((category.total / totalExpense) * 100).toFixed(2)}
          />
        );
      })}
    </div>
  );
}

export default AnalyticsGroupCategoryPieCard;
