import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center py-3 ">
      <Container>
        <Row>
          <Col>&copy;Bonanza MarketPlace {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
