import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const Item = ({producto}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.pictureUrl} />
      <Card.Body>
        <Card.Title >{producto.title}</Card.Title>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>Peso: {producto.weight}kg</ListGroup.Item>
            <ListGroup.Item>Precio: S/.{producto.price}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
