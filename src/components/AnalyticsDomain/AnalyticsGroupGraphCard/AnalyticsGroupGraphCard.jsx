import React from 'react'
import AnalyticsGraphCard from '../AnalyticsGraphCard/AnalyticsGraphCard'

function AnalyticsGroupGraphCard({props}) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <AnalyticsGraphCard transactionType={"Expense"} graph={"Graph"} transactionAmount={'340'}/>
      <AnalyticsGraphCard transactionType={"Income"} graph={"Graph"} transactionAmount={'540'}/>
    </div>
  )
}

export default AnalyticsGroupGraphCard