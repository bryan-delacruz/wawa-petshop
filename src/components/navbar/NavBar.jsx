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
        <LinkContainer to="/">
          <Navbar.Brand >WaWa-PetShop</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          {/* <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/category/dog">
            <Nav.Link >Perro</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/category/cat">
            <Nav.Link >Gato</Nav.Link>
          </LinkContainer>
          <LinkContainer to="ofertasTop">
            <Nav.Link href="#OfertTop">Ofertas TOP</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
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
