import React from "react";
import { Container, Title } from "./Styles";
import { FormControl, InputGroup } from "react-bootstrap";

export default function Newsletter() {
  return (
    <Container>
      <Title>receba novidades da nossa área de produtos digitais.</Title>
      <InputGroup className="mt-5 px-5">
        <FormControl
          placeholder="Digite seu e-mail"
          aria-label="Digite seu e-mail"
          aria-describedby="email-basic"
        />
        <InputGroup.Text id="email-basic">Cadastrar</InputGroup.Text>
      </InputGroup>
    </Container>
  );
}
