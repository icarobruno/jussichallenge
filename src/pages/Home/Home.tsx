import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";

import {
  Section,
  LeftSection,
  Title,
  Text,
  Button,
  RightSection,
  ProductCard,
  ProductImage,
  ProductButton,
} from "./Styles";

import { products } from "../../services/utils";
import Shops from "../../components/Shops/Shops";
import Solutions from "../../components/Solutions/Solutions";

export default function Home() {
  return (
    <Container fluid>
      <Header />
      <Section>
        <LeftSection>
          <Title>{`Criamos \n Lojas que \n vendem mais.`}</Title>
          <Text>
            {`
            A Jüssi é especialista na criação de lojas \n usando a plataforma VTEX. Precisa criar sua \n loja ou migrar de plataforma?`}
          </Text>
          <Button>Veja nossas soluções</Button>
        </LeftSection>
        <RightSection>
          {products.map((product, index) => (
            <ProductCard className="product-card" key={index}>
              <ProductImage src={product.avatar} alt={product.text}/>
              <ProductButton>{product.text}</ProductButton>
            </ProductCard>
          ))}
        </RightSection>
      </Section>
      <Shops />
      <Solutions />
    </Container>
  );
}
