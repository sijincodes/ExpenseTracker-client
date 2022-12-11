import React from "react";
import AnalyticsGroupCategoryPieCard from "./AnalyticsGroupCategoryPieCard/AnalyticsGroupCategoryPieCard";
import AnalyticsGroupGraphCard from "./AnalyticsGroupGraphCard/AnalyticsGroupGraphCard";
import AnalyticsHeader from "./AnalyticsHeader/AnalyticsHeader";

function AnalyticsDomain() {
  return <>
    <AnalyticsHeader header ={'Monthly Overview'}/>
    <AnalyticsGroupGraphCard props ={[]} />
    <AnalyticsHeader header ={'Expenses By Category'}/>
   <AnalyticsGroupCategoryPieCard />

  </>;
}

export default AnalyticsDomain;
