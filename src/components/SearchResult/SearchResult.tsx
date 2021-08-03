import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";

import {
  ProductCard,
  ProductImage,
  ProductName,
  Button,
  ProductDescription,
  SpanText,
} from "./Styles";

import api from "../../services/axios";

interface SearchResultProps {
  open: boolean;
  searchTerms: any;
  handleClose: () => void;
}

export default function SearchResult(props: SearchResultProps) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function searchProduct() {
      try {
        setLoading(true);
        const response = await api.get(`?brand=${props.searchTerms}`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert(`Houve um erro ao obter os produtos: ${err}`);
      }
    }

    searchProduct();
  }, [props]);

  return (
    <Modal show={props.open} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Resultado da busca para {props.searchTerms}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!loading ? (
          products.length > 1 ? (
            products.map((product: any, index) => (
              <ProductCard key={index}>
                <ProductName>{product.name}</ProductName>
                <ProductImage src={product.image_link} />
                <ProductDescription>{product.description}</ProductDescription>
                <Button>Ver mais</Button>
              </ProductCard>
            ))
          ) : (
            <SpanText>Nenhum produto foi encontrado</SpanText>
          )
        ) : (
          <></>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
