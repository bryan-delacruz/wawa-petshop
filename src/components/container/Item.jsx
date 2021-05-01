import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom"

const Item = ({ producto }) => {


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.pictureUrl} />
      <Card.Body>
        <Card.Title style={{ height: '4rem' }} >{producto.title}</Card.Title>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>Peso: {producto.weight}kg</ListGroup.Item>
            <ListGroup.Item>Precio: S/.{producto.price}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Link to={`/id/${producto.id}`}>
          <Button variant="primary">Más información</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
