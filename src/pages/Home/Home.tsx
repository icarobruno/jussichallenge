import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Shops from "../../components/Shops/Shops";
import Solutions from "../../components/Solutions/Solutions";
import AboutJussi from "../../components/AboutJussi/AboutJussi";
import VtexInfo from "../../components/VtexInfo/VtexInfo";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <Container fluid>
      <Header />
      <HomeBanner />
      <Shops />
      <Solutions />
      <AboutJussi />
      <VtexInfo />
      <Newsletter />
      <Footer />
    </Container>
  );
}
