import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import "./TransactionCard.css";

function TransactionCard() {
  const [isEditable, setIsEditable] = useState(false);

  const updateTransaction = () => {
    setIsEditable(!isEditable);
    console.log(isEditable);
  };
  return (
    <Container className="transactionCardContainer">
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
              defaultValue="Zalando"
            />
            <TextField
              style={{ margin: "0 10px" }}
              disabled={!isEditable}
              id="outlined-disabled"
              label="Amount"
              size="small"
              defaultValue={50}
              type={"number"}
             
            />
          </div>

          <div className="transactionButtonCardContainer">
            <div>
              <span
                className="material-icons marginIcon"
                onClick={updateTransaction}
              >
                edit
              </span>
              <span className="material-icons marginIcon">delete</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionCard;
