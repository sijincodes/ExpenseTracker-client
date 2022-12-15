import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function AnalyticsPieGraph({ percent }) {
  const data = [
    { name: "IncomingData", value: Number(percent) },
    { name: "Rest", value: 100 - percent },
  ];

  const COLORS = ["#EF9A53", "#F5D5AE"];

  return (
    <>
      <PieChart width={70} height={70}>
        <Pie
          data={data}
          cx={30}
          class
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
