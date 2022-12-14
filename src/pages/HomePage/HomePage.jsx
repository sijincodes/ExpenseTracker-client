import React, { useState } from "react";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransactionDomain from "../../components/TransactionDomain/TransactionDomain";
import AnalyticsDomain from "../../components/AnalyticsDomain/AnalyticsDomain";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  const [transactionList, setTransactionList] = useState([]);
  const [transactionTime, setTransactionTime] = useState(1);
  const [userSelectedDate, setUserSelectedDate] = useState(new Date());
  return (
    <Container fluid className="fullPage">
      <Row className="rowHeader">
        <Col style={{ width: "100%", paddingLeft: "0px", paddingRight: "0px" }}>
          <Navbar />
        </Col>
      </Row>
      <Row className="mainSection">
        <Col>
          <TransactionDomain
            transactionTime={transactionTime}
            setTransactionTime={setTransactionTime}
            userSelectedDate={userSelectedDate}
            setUserSelectedDate={setUserSelectedDate}
            transactionList={transactionList}
            setTransactionList={setTransactionList}
          />
        </Col>
        <Col>
          <AnalyticsDomain
            transactionTime={transactionTime}
            userSelectedDate={userSelectedDate}
            transactionList={transactionList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
