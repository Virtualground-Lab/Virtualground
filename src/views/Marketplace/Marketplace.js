import React from "react";
import Box from "@mui/material/Box";
import Main from "layouts/Main";
import Container from "components/Container";
import Newsletter from "blocks/Newsletter";
import {
  Categories,
  FeaturedProducts,
  Hero,
  LatestProducts,
  News,
  Overview,
  Products,
  Differences,
  //Reviews,
} from "./components";
import { Ground } from "threejs";

const Marketplace = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container paddingY={"0 !important"}>
        <Overview />
      </Container>
      <Container>
        <Categories />
      </Container>
      <Box bgcolor={"secondary.main"}>
        <Container>
          <FeaturedProducts />
        </Container>
      </Box>
      <Container>
        <Products />
      </Container>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <News />
        </Container>
      </Box>
      <Container>
        <LatestProducts />
      </Container>
      <Container paddingTop={"0 !important"}>
        <Differences />
      </Container>

      <Container paddingTop={"0 !important"}>
        <Ground />
      </Container>

      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
      */}
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default Marketplace;
