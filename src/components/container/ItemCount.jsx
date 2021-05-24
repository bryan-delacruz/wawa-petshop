import React from 'react'

import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'

const ItemCount = ({ stock, cuenta, setCuenta }) => {



    const plusOne = () => {
        cuenta < stock && setCuenta(cuenta + 1)

    }

    const minusOne = () => {
        cuenta !== 1 && setCuenta(cuenta - 1)
    }

    return (
        <ListGroup horizontal>
            <ButtonGroup>
                <Button
                    className="me-2"
                    onClick={plusOne}>+</Button>
                <Button
                    className="me-2"
                    onClick={minusOne}>-</Button>
            </ButtonGroup>

            {cuenta === 1 ?
                (<ListGroup.Item className="w-100">{`${cuenta} unidad`}</ListGroup.Item>) :
                (<ListGroup.Item className="w-100">{`${cuenta} unidades`}</ListGroup.Item>)}
        </ListGroup>
    )
}

export default ItemCount
