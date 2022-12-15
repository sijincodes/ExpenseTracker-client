import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import AnalyticsPieGraph from "./../AnalyticsPieGraph/AnalyticsPieGraph";
import { baseUrl } from "../../../consts";

import "./AnalyticsCategoryPieCard.css";

function fetchCategory(categories, categoryId) {
  return categories.filter((category) => category._id === categoryId)[0];
}
function AnalyticsCategoryPieCard({ pie, category, amount, percent }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      const authToken = localStorage.getItem("authToken");
      let categories = await axios.get(`${baseUrl}/category?type=expense`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setCategories(categories.data);
    };
    fetchCategoryDetails();
  }, [category]);

  return (
    <>
      <Container className="analyticsCategoryPieCardContainer">
        <Row className="pieCardRow">
          <Col className="analyticsPieCard">
            <AnalyticsPieGraph percent={percent} />
          </Col>
          <Col className="pieCardDetails">
            <span className="spanPie">Category Name : </span><span><strong>{fetchCategory(categories, category)?.categoryName}</strong></span>
            <span className="spanPie">Total Amount : </span><span><strong>€{amount}</strong></span>
          </Col>
          <Col className="pieCardPercentValue">
          <span className="spanPie">Percentage :</span><span><strong> {percent}%</strong></span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AnalyticsCategoryPieCard;
