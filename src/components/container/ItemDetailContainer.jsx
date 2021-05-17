import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'

import { getFirestore } from '../../firebase/firebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = db.collection("items")

        itemsCollection.get()
            .then((querySnapShot) => {
                querySnapShot.size === 0 ?
                    console.log("No hay items") :
                    console.log(`Hay ${querySnapShot.size} items`)
                const documentos = querySnapShot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }
                )
                setItem(...documentos.filter(e => e.id === id))
            })
            .catch((err) => console.log("error", err))
            .finally(() => "fin de la promesa")
    }, [id])

    console.log(id)

    return (
        <Container>
            <ItemDetail producto={item} ></ItemDetail>
        </Container>


    )
}

export default ItemDetailContainer
