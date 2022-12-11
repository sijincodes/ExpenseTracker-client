import React from 'react'
import AnalyticsGraphCard from '../AnalyticsGraphCard/AnalyticsGraphCard'

function AnalyticsGroupGraphCard({props}) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <AnalyticsGraphCard transactionType={"Expense"} transaction={"Graph"} transactionAmount={'340'}/>
      <AnalyticsGraphCard transactionType={"Income"} transaction={"Graph"} transactionAmount={'540'}/>
    </div>
  )
}

export default AnalyticsGroupGraphCard