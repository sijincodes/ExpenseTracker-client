import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import TextField from "@mui/material/TextField";

import "./TransactionCard.css";
import EditIcon from "../EditIcon/EditIcon";
import Icons from "../Icons/Icons";
import { baseUrl } from "../../../consts";

function TransactionCard({ transaction, transactionTime, setTransactionList }) {
  const [isEditable, setIsEditable] = useState(false);
  const [updatedDesription, setUpdatedDesription] = useState(
    transaction.transactionDescription
  );
  const [updatedAmount, setUpdatedAmount] = useState(
    transaction.transactionAmount
  );

  const shouldDateBeDisplayed = transactionTime === 2 || transactionTime === 3;
  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const deleteTransaction = async (id) => {
    const authToken = localStorage.getItem("authToken");
    await axios.delete(`${baseUrl}/transaction/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    setTransactionList((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction._id !== id)
    );
  };

  return (
    <Container className="transactionCardContainer">
      {shouldDateBeDisplayed && (
        <Row className="firstRowContainer">
          <Col>
            <div className="firstRowWrapper">
              <span className="dateText">
                {transaction.TransactionCreatedDate.split("T")[0]}
              </span>
            </div>
          </Col>
        </Row>
      )}
      <Row className="cardRow">
        <Col className="cardCol">
          <div className="innerCard">
            <span className="material-icons " style={{ margin: "0 10px" }}>
              shopping_cart
            </span>
            <TextField
              className="descriptionTextField"
              disabled={!isEditable}
              id="outlined-disabled"
              label="Description"
              size="small"
              value={updatedDesription}
              onChange={(e) => setUpdatedDesription(e.target.value)}
            />
            <TextField
              style={{ margin: "0 10px" }}
              disabled={!isEditable}
              id="outlined-disabled"
              label="Amount"
              size="small"
              value={updatedAmount}
              onChange={(e) => setUpdatedAmount(e.target.value)}
              type={"number"}
            />
          </div>

          <div className="transactionButtonCardContainer">
            <div>
              {isEditable ? (
                <>
                  <Icons text="done" handleClick={toggleEdit} />
                  <Icons
                    text="close"
                    handleClick={() => {
                      setUpdatedDesription(transaction.transactionDescription);
                      setUpdatedAmount(transaction.transactionAmount);
                      toggleEdit();
                    }}
                  />
                </>
              ) : (
                <>
                  <EditIcon handleClick={toggleEdit} />
                  <Icons
                    text="delete"
                    handleClick={() => deleteTransaction(transaction._id)}
                  />
                </>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionCard;
