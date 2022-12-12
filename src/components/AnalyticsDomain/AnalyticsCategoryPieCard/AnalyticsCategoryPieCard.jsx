import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnalyticsPieGraph from "./../AnalyticsPieGraph/AnalyticsPieGraph"

import "./AnalyticsCategoryPieCard.css"

function AnalyticsCategoryPieCard({pie,category,amount,percent}) {
  return (
    <>
      <Container className="analyticsCategoryPieCardContainer">
        <Row className="pieCardRow">
          <Col className="analyticsPieCard">
            {/* <span>{pie}</span> */}
            <AnalyticsPieGraph />
          </Col>
          <Col className="pieCardDetails">
            <span>{category}</span>
            <span>{amount}</span>
          </Col>
          <Col className="pieCardPercentValue">
            <span>{percent}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsCategoryPieCard;
