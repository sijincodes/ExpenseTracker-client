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
              {/* <EditIcon updateTransaction={updateTransaction}/> */}

              {/* if pencil is clicked tick nd X appears
            if tick is clicked updated info is displayed and is X user is taken back to pencil and bin */}

              {/* if bin is clicked tick and X appears
            and if tick is clicks, updated info if X is clicked pencil and bin appears */}

              {/* pencil = <EditIcon updateTransaction={updateTransaction}/>
            bin = <span className="material-icons marginIcon">delete</span>

            tick = <Icons text="done"/>
            X = <Icons text="close"/> */}

              {isEditable ? (
                <>
                  <Icons text="done" />
                  <Icons text="close" updateTransaction={updateTransaction} />
                </>
              ) : (<>
                
                 <EditIcon updateTransaction={updateTransaction}/>
                  <Icons text="delete"/> 
                  </>)
                
              }
              {/* when tick is clicked return back to pencil nd bin */}
             
              {/* <span className="material-icons marginIcon">delete</span> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionCard;
