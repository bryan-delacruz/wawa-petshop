import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">WaWa-PetShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light" className="mr-sm-2">
            Search
          </Button>
        </Form>
        <CartWidget />
      </Navbar>
    </>
  );
};
export default NavBar;
