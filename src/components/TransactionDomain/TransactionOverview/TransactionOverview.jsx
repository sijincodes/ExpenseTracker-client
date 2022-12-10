import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "@mui/material/Divider";

import "./TransactionOverview.css";

function TransactionOverview() {
  return (
    <>
      <Container className="transactionOverviewContainer">
        <Row>
          <Col className="columnContainer">
            <div className="transactionSpan">
              <span className="spanTitle">Total Income</span>
              <span className="spanContent">€300</span>
            </div>
            <div className="transactionSpan">
              <span className="spanTitle">Total Expense</span>
              <span className="spanContent">€4000</span>
            </div>
          </Col>
          <Col className="transactionSpan columnFlexEnd ">
            <span className="spanTitle">Net</span>
            <span className="spanContent">€3700</span>
          </Col>
        </Row>
      </Container>
      <Divider variant="middle" className="divider" sx={{ borderBottomWidth: 2 }} style={{ background: '#a4a3a6' }} />
    </>
  );
}

export default TransactionOverview;
