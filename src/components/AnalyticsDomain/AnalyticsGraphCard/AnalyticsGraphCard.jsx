import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnalyticsGraph from "./../AnalyticsGraph/AnalyticsGraph";

import "./AnalyticsGraphCard.css";

function AnalyticsGraphCard({
  transactionType,
  transactionList,
  transactionAmount,
}) {
  return (
    <>
      <Container className="analyticsGraphCardContainer">
        <Row style={{ width: "100%" }}>
          <Col className="analyticsCard">
            <span><strong>{transactionType}</strong></span>
            {/* <span>{graph}</span> */}
            <AnalyticsGraph transactionList={transactionList} transactionType={transactionType} />
            {/* <span>{transactionAmount}</span> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsGraphCard;
