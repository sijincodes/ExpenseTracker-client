import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./AnalyticsGraphCard.css";

function AnalyticsGraphCard({transactionType,transaction,transactionAmount}) {
  return (
    <>
      <Container className="analyticsGraphCardContainer">
        <Row>
          <Col className="analyticsCard">
            <span>{transactionType}</span>
            <span>{transaction}</span>
            <span>{transactionAmount}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsGraphCard;
