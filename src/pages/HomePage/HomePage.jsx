import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TransactionDomain from "../../components/TransactionDomain/TransactionDomain";
import AnalyticsDomain from "../../components/AnalyticsDomain/AnalyticsDomain";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <Container fluid className="fullPage">
    <Row className="rowHeader">
      <Col style={{width:"100%" ,paddingLeft: "0px",
    paddingRight: "0px"}}>
        <Navbar />
      </Col>
    </Row>
      <Row className="fullPage">
        <Col>
          <TransactionDomain />
        </Col>
        <Col>
          <AnalyticsDomain />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
