/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

import { useParams } from 'react-router-dom'

import { getFirestore } from '../../firebase/firebase'

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { categoryId } = useParams()

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
        categoryId === undefined ? 
          setItems(documentos) : 
          setItems(documentos.filter(e => e.categoryId === categoryId));
      })
      .catch((err) => console.log("error", err))
      .finally(() => "fin de la promesa")
  }, [categoryId])

  return (
    <>
      <Container>
        <ItemList productos={items} />
      </Container>
    </>
  );
};

export default ItemListContainer;
