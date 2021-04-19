import React from "react";
import { ListGroup } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({productos}) => {
  return (
    <>
      <ListGroup horizontal className="justify-content-md-center">
        {productos.map((e) => (
          <Item key={e.id} producto={e}></Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ItemList;
