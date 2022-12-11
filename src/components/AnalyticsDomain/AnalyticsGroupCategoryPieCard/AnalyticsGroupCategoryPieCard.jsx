import React from 'react'
import AnalyticsCategoryPieCard from '../AnalyticsCategoryPieCard/AnalyticsCategoryPieCard'

function AnalyticsGroupCategoryPieCard({props}) {
  return (
    <div style={{ paddingTop: "20px" }}>
    <AnalyticsCategoryPieCard pie={'pie'} category={'Shopping'} amount={'100'} percent={"%"}/>
    <AnalyticsCategoryPieCard pie={'pie'} category={'Grocery'} amount={'250'} percent={"%"}/>
  </div>
  )
}

export default AnalyticsGroupCategoryPieCard