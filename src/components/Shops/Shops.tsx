import React from "react";
import { ArrowRight } from "react-feather";
import { Container, Text, Image } from "./Styles";

import Brastemp from "../../assets/images/brastemp.png";
import CompraCerta from "../../assets/images/compra-certa.png";
import Consul from "../../assets/images/consul.png";
import TheBar from "../../assets/images/thebar.png";

export default function Shops() {
  return (
    <Container>
      <Text>Nossas principais lojas VTEX</Text>
      <ArrowRight className="d-md-block d-none"/>
      <Image src={Brastemp} alt="Brastemp" />
      <Image src={CompraCerta} alt="Compra-Certa" />
      <Image src={Consul} alt="Consul" />
      <Image src={TheBar} alt="The-Bar" />
    </Container>
  );
}
