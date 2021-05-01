/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";

import getdata from "../../database/data"

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(getdata());
      }, 500);
    });

    getProducts
      .then(
        (res) => {
          setProducts(res);
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
  }, []);

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
