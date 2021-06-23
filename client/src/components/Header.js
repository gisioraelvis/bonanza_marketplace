import React from "react";
import './Header.css'
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/bonanza-main-logo.png"
              width="240"
              height="68"
              className="d-inline-block align-top"
              alt="bonanza-main-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-items ml-auto">
              <Nav  >
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart" ></i> Cart
                </Nav.Link>
                <Nav.Link href="/sign-in">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
