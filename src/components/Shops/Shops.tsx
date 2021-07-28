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
      <ArrowRight />
      <Image src={Brastemp} />
      <Image src={CompraCerta} />
      <Image src={Consul} />
      <Image src={TheBar} />
    </Container>
  );
}
