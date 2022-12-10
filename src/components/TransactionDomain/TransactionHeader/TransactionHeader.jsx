import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddIcon from "../AddIcon/AddIcon";
import TransactionDatePicker from "../TransactionDatePicker/TransactionDatePicker";

import "./TransactionHeader.css";

function TransactionHeader() {
  const [isCreateTransactionClicked, setIsCreateTransactionClicked] =
    useState(false);

  const toggleCreateTransaction = () => {
    setIsCreateTransactionClicked(!isCreateTransactionClicked);
  };
  return (
    <Container className="containerMinWidth">
      <Row>
        <Col className="columnFlex columnSpaced">
          <div>
            {/* Here we can add a component that can render heaing based on props for reusability */}
            <span style={{ fontSize: "20px" }}>
              <strong>Daily Transaction</strong>
            </span>
          </div>
          <div className="columnFlex columnSpaced">
            <TransactionDatePicker />
            <AddIcon handleClick={toggleCreateTransaction} />
          </div>
        </Col>
      </Row>
      {isCreateTransactionClicked && (
        <Row>
          <Col>Transaction Form</Col>
        </Row>
      )}
    </Container>
  );
}

export default TransactionHeader;
