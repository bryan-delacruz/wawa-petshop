/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

import { useParams } from 'react-router-dom'

import getdata from "../../database/data"

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {

    const getProducts = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(getdata());
      }, 500);
    });

    getProducts
      .then(
        (res) => {
          console.log(categoryId);
          (categoryId === undefined) ? setProducts(res) : setProducts(res.filter(e => e.category === categoryId));
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
  }, [categoryId]);

  //   console.log(products);

  return (
    <>
      <Container>
        <ItemList productos={products} />
      </Container>

    </>
  );
};

export default ItemListContainer;
