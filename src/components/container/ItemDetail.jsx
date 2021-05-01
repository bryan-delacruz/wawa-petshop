import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const ItemDetail = ({ producto }) => {
    console.log(producto)
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
            </Card.Body>
        </Card>
    )
}


export default ItemDetail