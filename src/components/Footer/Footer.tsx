import React from "react";

import { Container, LogoContainer, IconsContainer, Logo } from "./Styles";

import WppLogo from "../../assets/images/wppcompany.png";
import { Facebook, Instagram, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo alt="wpp-logo" src={WppLogo} />
      </LogoContainer>
      <IconsContainer>
        <Facebook size={18}/>
        <Instagram size={18} className="mx-2"/>
        <Linkedin size={18}/>
      </IconsContainer>
    </Container>
  );
}
