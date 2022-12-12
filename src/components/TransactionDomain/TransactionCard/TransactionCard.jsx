import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import "./TransactionCard.css";
import EditIcon from "../EditIcon/EditIcon";
import Icons from "../Icons/Icons";

function TransactionCard({ transaction }) {
  const [isEditable, setIsEditable] = useState(false);
  const updateTransaction = () => {
    setIsEditable(!isEditable);
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
              {isEditable ? (
                <>
                  <Icons text="done" updateTransaction={updateTransaction} />
                  <Icons text="close" updateTransaction={updateTransaction} />
                </>
              ) : (
                <>
                  <EditIcon updateTransaction={updateTransaction} />
                  <Icons text="delete" />
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
