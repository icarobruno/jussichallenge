import React from "react";

import {
  Container,
  TitleContainer,
  TitleHash,
  TitleText,
  CardsContainer,
  Card,
  CardAvatar,
  CardName,
  CardDescription,
  CardList,
  CardListItem,
  CardButton,
} from "./Styles";

export default function Solutions() {
  return (
    <Container>
      <TitleContainer>
        <TitleHash>{"//"}</TitleHash>
        <TitleText>Nossas soluções</TitleText>
      </TitleContainer>
      <CardsContainer>
        {new Array(4).fill(1).map((data, index) => (
          <Card key={index}>
            <CardAvatar>P{index + 1}</CardAvatar>
            <CardName>Nome do Produto #{index + 1}</CardName>
            <CardDescription>Descrição do produto #{index + 1}</CardDescription>
            <CardList>
              <CardListItem>Feature 1</CardListItem>
              <CardListItem>Feature 2</CardListItem>
              <CardListItem>Feature 3</CardListItem>
            </CardList>
            <CardButton>Ver solução</CardButton>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}
