import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./SearchBox.css";

function SearchBox({setSearchQuery,searchQuery}) {
 
  return (
    <Container className="searchBoxContainer">
      <Row>
        <Col>
          <input
            className="searchBoxInputBox"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBox;
