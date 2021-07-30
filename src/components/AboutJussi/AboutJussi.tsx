import React from "react";
import {
  About,
  AboutButton,
  AboutText,
  AboutTitle,
  Container,
  FigureAbout,
  FigureImage
} from "./Styles";

import Jussi from "../../assets/images/jussi.png";

export default function AboutJussi() {
  return (
    <Container>
      <About>
        <AboutTitle>Olá, somos a Jüssi</AboutTitle>
        <AboutText>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </AboutText>
        <AboutButton>Conheça a Jüssi</AboutButton>
      </About>
      <FigureAbout>
        <FigureImage src={Jussi} />
      </FigureAbout>
    </Container>
  );
}
