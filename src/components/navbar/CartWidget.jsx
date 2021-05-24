import React from 'react'
import { Navbar } from "react-bootstrap"
import shoppingCart from "./shopping-cart.svg"
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to='/cart'>
      <Navbar.Brand>
        <img
          src={shoppingCart}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Link>

  )
}

export default CartWidget
