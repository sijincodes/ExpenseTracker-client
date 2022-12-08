import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./SignUp.css";

function SignUp() {
  return (
    <div className="signupContainer">
      <Container fluid>
        <Row>
          <Col className="signupDivider">
            <Card className="cardWidth">
              <Card.Body>
                <Card.Title>Sign Up rigth now!</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                  corrupti laudantium dolores repellendus nam earum. Recusandae,
                  distinctio dolor obcaecati deleniti alias, debitis et,
                  possimus veniam exercitationem fugiat perferendis quae saepe!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="signupDivider">
            <Card className="cardWidth">
              <Card.Body>
                <Card.Title>Sign Up</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
