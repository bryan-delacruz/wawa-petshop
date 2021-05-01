import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'

import getdata from "../../database/data"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const { id } = useParams()

    useEffect(() => {

        const getItems = new Promise((resolve, reject) => {
            // id, title, description, price, pictureUrl
            setTimeout(() => {
                resolve(getdata());
            }, 500);
        });

        getItems
            .then(
                (res) => {
                    setProduct(...res.filter(e=>e.id===id));
                },
                (rej) => {
                    console.log("rechazada-->", rej);
                }
            )
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("fin de la promesa");
            });
    }, [id]);


    console.log(id)

    return (
        <Container>
            <ItemDetail producto={product} ></ItemDetail>
        </Container>


    )
}

export default ItemDetailContainer
