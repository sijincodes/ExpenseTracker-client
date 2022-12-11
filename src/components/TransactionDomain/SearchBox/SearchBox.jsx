import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./SearchBox.css";

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  return (
    <Container className="searchBoxContainer">
      <Row>
        <Col>
          <input
            className="searchBoxInputBox"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBox;
