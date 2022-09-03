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
          <img src={logo} className="logo-footer" alt="logo" />
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Favela Radical</h3>
          <a className="social-text" href="https://forms.gle/jx2u5z86LSK9bKLx5" target="_blank" rel="noreferrer">Trabalhe conosco</a>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <h3>Acompanhe nosso trabalho</h3>
            </li>
            <li className="social-icons">
              <a
                className="social-text"
                href="https://www.instagram.com/favelaradical/"
                style={{ color: "#db5e1a" }}
              >
                {" "}
                INSTAGRAM
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://pt-br.facebook.com/FRfavelaradical/"
                style={{ color: "#db5e1a" }}
                className="social-text"
              >
                FACEBOOK
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://br.linkedin.com/company/favela-radical"
                style={{ color: "#db5e1a" }}
                className="social-text"
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
