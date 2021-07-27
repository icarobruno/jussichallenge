import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";

import {
  Section,
  LeftSection,
  Title,
  Text,
  RightSection,
  ProductCard,
} from "./Styles";

import { products } from "../../services/utils";

export default function Home() {
  return (
    <Container fluid>
      <Header />
      <Section>
        <LeftSection>
          <Title>Criamos lojas que vendem mais.</Title>
          <Text>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </Text>
        </LeftSection>
        <RightSection>
          {products.map((product, index) => (
            <ProductCard className="product-card"></ProductCard>
          ))}
        </RightSection>
      </Section>
    </Container>
  );
}
