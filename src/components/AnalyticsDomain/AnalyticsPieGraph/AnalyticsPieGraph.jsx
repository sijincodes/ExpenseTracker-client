import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function AnalyticsPieGraph() {
  const data = [
    { name: "Shopping", value: 60 },
    { name: "Rest", value: 40 },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <>
      <PieChart width={70} height={70}>
        <Pie
          data={data}
          cx={30}class
          cy={30}
          innerRadius={20}
          outerRadius={30}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}

export default AnalyticsPieGraph;
