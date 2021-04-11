import React from 'react'
import {Navbar} from "react-bootstrap"
import shoppingCart from "./shopping-cart.svg"

const CartWidget = () => {
    return (
        <Navbar.Brand href="#home">
          <img
            src={shoppingCart}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
    )
}

export default CartWidget
