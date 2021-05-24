import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'


const ItemDetail = ({ producto }) => {

    const [cuenta, setCuenta] = useState(1);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.image} />
            <Card.Body>
                <Card.Title style={{ height: '4rem' }} >{producto.title}</Card.Title>
                <Card.Text>
                    <ListGroup>
                        <ListGroup.Item>Peso: {producto.weight}kg</ListGroup.Item>
                        <ListGroup.Item>Precio: S/.{producto.price}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <ItemCount stock={producto.stock} cuenta={cuenta} setCuenta={setCuenta}></ItemCount>
                <Button variant="primary" className="mt-2 w-100">Agregar</Button>
                {}
                <Link to='/cart'>
                    <Button variant="success" className="mt-2 w-100">Terminar tu compra</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}


export default ItemDetail