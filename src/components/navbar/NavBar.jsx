import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">WaWa-PetShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#dog">Perro</Nav.Link>
          <Nav.Link href="#cat">Gato</Nav.Link>
          <Nav.Link href="#OfertTop">Ofertas TOP</Nav.Link>
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
