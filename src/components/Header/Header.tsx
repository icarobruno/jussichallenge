import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

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
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>
              <ShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
