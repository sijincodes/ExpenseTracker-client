import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function AnalyticsGraph({ transactionList,transactionType }) {
  const data = [
    {
      _id: "1",
      shopping: 40,
      grocery: 24,
      amt: 2400,
    },
    {
      _id: "2",
      shopping: 30,
      grocery: 13,
      amt: 2210,
    },
    {
      _id: "3",
      shopping: 20,
      grocery: 98,
      amt: 2290,
    },
    {
      _id: "4",
      shopping: 27,
      grocery: 39,
      amt: 2000,
    },
    {
      _id: "5",
      shopping: 18,
      grocery: 48,
      amt: 2181,
    },
    {
      _id: "6",
      shopping: 23,
      grocery: 38,
      amt: 2500,
    },
    {
      _id: "7",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "8",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "9",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "10",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "11",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "12",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "13",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "14",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "15",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "16",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "17",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "18",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "19",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "20",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "21",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "22",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "23",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "24",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "25",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "26",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "27",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "28",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "29",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "30",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
    {
      _id: "31",
      shopping: 34,
      grocery: 43,
      amt: 2100,
    },
  ];

  return (
    <>
      <BarChart
        width={300}
        height={300}
        data={transactionList.length === 0 ? data : transactionList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" tick={{ fontSize: 10 }}/>
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
      {transactionType==='Expense' ? (<Bar dataKey="total" fill="#EF9A53" barSize={30}/>) :<Bar dataKey="total" fill="#367E18" barSize={30} />}
      </BarChart>
    </>
  );
}

export default AnalyticsGraph;
