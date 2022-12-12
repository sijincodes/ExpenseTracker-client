import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function AnalyticsGraph() {
  const data = [
    {
      date: "1Jan",
      shopping: 40,
      grocery: 24,
      amt: 2400,
    },
    {
      date: "2Jan",
      shopping: 30,
      grocery: 13,
      amt: 2210,
    },
    {
      date: "3Jan",
      shopping: 20,
      grocery: 98,
      amt: 2290,
    },
    {
      date: "4Jan",
      shopping: 27,
      grocery: 39,
      amt: 2000,
    },
    {
      date: "5Jan",
      shopping: 18,
      grocery: 48,
      amt: 2181,
    },
    {
      date: "6Jan",
      shopping: 23,
      grocery: 38,
      amt: 2500,
    },
    {
      date: "7Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "8Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "9Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "10Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "11Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "12Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "13Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "14Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "15Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "16Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "17Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "18Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "19Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "20Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "21Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "22Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "23Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "24Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "25Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "26Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "27Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "28Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "29Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      date: "30Jan",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
  ];
  return (
    // <ResponsiveContainer width="70%" height="70%">
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="grocery" fill="#8884d8" />
      {/* <Bar dataKey="shopping" fill="#82ca9d" /> */}
      {/* <Line
        type="monotone"
        dataKey="grocery"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      /> */}
      {/* <Line type="monotone" dataKey="shopping" stroke="#82ca9d" /> */}
    </BarChart>
    // </ResponsiveContainer>
  );
}

export default AnalyticsGraph;
