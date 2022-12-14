import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "@mui/material/Divider";

import "./TransactionOverview.css";

function TransactionOverview({ transactions }) {
  const [totalIncome, settotalIncome] = useState(0);
  const [totalExpense, settotalExpense] = useState(0);

  useEffect(() => {
    settotalIncome(
      transactions
        .filter((transaction) => transaction.transactionType === "income")
        .reduce((acc, current) => acc + Number(current.transactionAmount), 0)
    );

    settotalExpense(
      transactions
        .filter((transaction) => transaction.transactionType === "expense")
        .reduce((acc, current) => acc + Number(current.transactionAmount), 0)
    );
  }, [transactions]);
  // const totalIncome = transactions
  //   .filter((transaction) => transaction.transactionType === "income")
  //   .reduce((acc, current) => acc + current.transactionAmount, 0);
  // console.log(totalIncome);
  // const totalExpense = transactions
  //   .filter((transaction) => transaction.transactionType === "expense")
  //   .reduce((acc, current) => acc + current.transactionAmount, 0);
  // console.log(totalExpense);

  return (
    <>
      <Container className="transactionOverviewContainer">
        <Row>
          <Col className="columnContainer">
            <div className="transactionSpan">
              <span className="spanTitle">Total Income</span>
              <span className="spanContent">€{totalIncome}</span>
            </div>
            <div className="transactionSpan">
              <span className="spanTitle">Total Expense</span>
              <span className="spanContent">€{totalExpense}</span>
            </div>
          </Col>
          <Col className="transactionSpan columnFlexEnd ">
            <span className="spanTitle">Net</span>
            <span className="spanContent">
              {totalIncome - totalExpense < 0
                ? `-€${totalExpense - totalIncome}`
                : `€${totalIncome - totalExpense}`}
            </span>
          </Col>
        </Row>
      </Container>
      <Divider
        variant="middle"
        className="divider"
        sx={{ borderBottomWidth: 2 }}
        style={{ background: "#a4a3a6" }}
      />
    </>
  );
}

export default TransactionOverview;
