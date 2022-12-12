import React from "react";
import AnalyticsGraphCard from "../AnalyticsGraphCard/AnalyticsGraphCard";

import "./AnalyticsGroupGraphCard.css";

function AnalyticsGroupGraphCard({ props }) {
  return (
    <div className="analyticsGroupGraphCardContainer">
      <AnalyticsGraphCard
        transactionType={"Expense"}
        transactionAmount={"340"}
      />
      <AnalyticsGraphCard
        transactionType={"Income"}
        transactionAmount={"540"}
      />
    </div>
  );
}

export default AnalyticsGroupGraphCard;
