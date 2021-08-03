import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Image, SearchInput, Input } from "./Styles";

import Logo from "../../assets/images/logo.png";
import { ShoppingCart, Search } from "react-feather";
import SearchResult from "../SearchResult/SearchResult";

export default function Header() {
  const [openResult, setOpenResult] = useState(false);
  const [searchTermHandle, setSearchTermHandle] = useState(null);

  function handleClose() {
    setOpenResult(!openResult);
  }

  function handleSearchTerm(e: any) {
    setSearchTermHandle(e.target.value);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
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
              <SearchInput>
                <Input placeholder="Buscar" onChange={handleSearchTerm} />
                <Search size={20} onClick={handleClose} />
              </SearchInput>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>
                <ShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {openResult && searchTermHandle && (
        <SearchResult
          open={openResult}
          searchTerms={searchTermHandle}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
