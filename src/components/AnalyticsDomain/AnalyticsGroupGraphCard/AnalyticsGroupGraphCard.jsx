import React from "react";
import AnalyticsGraphCard from "../AnalyticsGraphCard/AnalyticsGraphCard";

import "./AnalyticsGroupGraphCard.css";

function AnalyticsGroupGraphCard({ incomeList, expenseList }) {
  return (
    <div className="analyticsGroupGraphCardContainer">
      <AnalyticsGraphCard
        transactionType={"Expense"}
        transactionList={expenseList}
        transactionAmount={"340"}
      />
      <AnalyticsGraphCard
        transactionType={"Income"}
        transactionAmount={"540"}
        transactionList={incomeList}
      />
    </div>
  );
}

export default AnalyticsGroupGraphCard;
