import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddIcon from "../AddIcon/AddIcon";
import RemoveIcon from "../RemoveIcon/RemoveIcon";
import TransactionDatePicker from "../TransactionDatePicker/TransactionDatePicker";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionHeaderDropdown from "../TransactionHeaderDropdown/TransactionHeaderDropdown";

import "./TransactionHeader.css";

function TransactionHeader({
  transactionTime,
  setTransactionTime,
  transactionList,
  setTransactionList,
  userSelectedDate,
  setUserSelectedDate,
}) {
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
            {/* Here we can add a component that can render heading based on props for reusability */}
            <TransactionHeaderDropdown
              transactionTime={transactionTime}
              setTransactionTime={setTransactionTime}
            />
          </div>
          <div className="columnFlex columnSpaced">
            <TransactionDatePicker
              transactionTime={transactionTime}
              userSelectedDate={userSelectedDate}
              setUserSelectedDate={setUserSelectedDate}
            />
            {isCreateTransactionClicked ? (
              <RemoveIcon handleClick={toggleCreateTransaction} />
            ) : (
              <AddIcon
                handleClick={toggleCreateTransaction}
                transactionTime={transactionTime}
              />
            )}
          </div>
        </Col>
      </Row>
      {isCreateTransactionClicked && (
        <Row>
          <Col>
            <TransactionForm
              hideForm={toggleCreateTransaction}
              userSelectedDate={userSelectedDate}
              transactionList={transactionList}
              setTransactionList={setTransactionList}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default TransactionHeader;
