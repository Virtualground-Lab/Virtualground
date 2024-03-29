import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Main from "layouts/Main";
import Newsletter from "blocks/Newsletter";
import Container from "components/Container";
import { Welcome } from "./components";

const Environment = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }
      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };
    jarallaxInit();
  });

  const theme = useTheme();

  const styles = (bgImage) => ({
    position: "absolute",
    objectFit: "cover",
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: "object-fit: cover;",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
  });

  return (
    <Main>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
        marginTop={-13}
        paddingTop={13}
      >
        <Container>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Welcome />
          </Box>
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        id="agency__portfolio-item--js-scroll"
      >
        <Container>
          <Newsletter
            title=" Subscribe for latest updates"
            subtitle={
              "Don't lose a chance to be among the first to know about our upcoming news and updates."
            }
            successMessage={"You have subscribed successfully"}
          />
        </Container>
      </Box>
    </Main>
  );
};

export default Environment;
