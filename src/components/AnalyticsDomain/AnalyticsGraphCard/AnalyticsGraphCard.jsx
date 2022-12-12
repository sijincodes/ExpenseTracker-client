import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnalyticsGraph from "./../AnalyticsGraph/AnalyticsGraph";

import "./AnalyticsGraphCard.css";

function AnalyticsGraphCard({ transactionType, transactionAmount }) {
  return (
    <>
      <Container className="analyticsGraphCardContainer">
        <Row style={{ width: "100%" }}>
          <Col className="analyticsCard">
            <span>{transactionType}</span>
            {/* <span>{graph}</span> */}
            <AnalyticsGraph />
            <span>{transactionAmount}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsGraphCard;
