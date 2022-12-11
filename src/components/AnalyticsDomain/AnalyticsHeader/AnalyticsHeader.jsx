import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./AnalyticsHeader.css"

function AnalyticsHeader() {
  return (
    <Container className="analyticsHeaderMinWidth">
        <Row>
            <Col>
            <div>
            <span style={{ fontSize: "20px" }}>
              <strong>Monthly Overview</strong>
            </span>
          </div>
            </Col>
        </Row>
    </Container>
  )
}

export default AnalyticsHeader