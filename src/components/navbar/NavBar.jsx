import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

import CartWidget from "./CartWidget";

const NavBar = (props) => {

  let f = new Date();
  console.log(f.setTime(Date.parse("Apr 30, 2021")))

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">WaWa-PetShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <LinkContainer to="#perro">
            <Nav.Link >Perro</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#cat">Gato</Nav.Link>
          <LinkContainer to="ofertasTop">
            <Nav.Link href="#OfertTop">Ofertas TOP</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/id">
            <Nav.Link >Iniciar Sesión</Nav.Link>
          </LinkContainer>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-light" className="mr-sm-2">
            Buscar
          </Button>
        </Form>
        <CartWidget />
      </Navbar>
    </>
  );
};
export default NavBar;
