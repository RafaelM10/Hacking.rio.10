import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
			<img src={logo} className="logo-footer" alt="logo" />
          <h3>10perto © {year}</h3>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Footer;
