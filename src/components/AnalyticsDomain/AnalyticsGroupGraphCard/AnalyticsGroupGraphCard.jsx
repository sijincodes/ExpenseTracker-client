import React from 'react'
import AnalyticsGraphCard from '../AnalyticsGraphCard/AnalyticsGraphCard'

function AnalyticsGroupGraphCard({props}) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <AnalyticsGraphCard transactionType={"Expense"}  transactionAmount={'340'}/>
      <AnalyticsGraphCard transactionType={"Income"}  transactionAmount={'540'}/>
    </div>
  )
}

export default AnalyticsGroupGraphCard