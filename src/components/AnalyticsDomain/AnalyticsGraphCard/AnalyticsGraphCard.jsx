import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./AnalyticsGraphCard.css";

function AnalyticsGraphCard({transactionType,graph,transactionAmount}) {
  return (
    <>
      <Container className="analyticsGraphCardContainer">
        <Row>
          <Col className="analyticsCard">
            <span>{transactionType}</span>
            <span>{graph}</span>
            <span>{transactionAmount}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsGraphCard;
