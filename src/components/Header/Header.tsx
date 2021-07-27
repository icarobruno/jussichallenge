import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { Image } from "./Styles";

import Logo from "../../assets/images/logo.png";
import { ShoppingCart } from "react-feather";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Nossas soluções</Nav.Link>
            <Nav.Link href="#pricing">Conheça a Jüssi</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <ShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
