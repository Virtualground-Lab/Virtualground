import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NoSsr from "@mui/material/NoSsr";
import Main from "layouts/Main";
import Container from "components/Container";
import Newsletter from "blocks/Newsletter";
import {
  Welcome,
  Explore,
  Insights,
  Wearable,
  Trade,
  Estates,
  Blog,
  Solutions,
  Events,
  VideoSection,
} from "./components";

const Home = () => {
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

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }
      window.scrollTo({ left: 0, top: element.offsetTop, behavior: "smooth" });
    });
  };

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
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={"svg"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo("virtualground-item--js-scroll")}
                  sx={{ cursor: "pointer" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Container>
          <Solutions />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Container>
          <VideoSection />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://images.pexels.com/photos/8832898/pexels-photo-8832898.jpeg?cs=srgb&dl=pexels-mo-8832898.jpg&fm=jpg"
          )}
        />
        <Container>
          <Explore />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Container>
          <Events />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Ftrade.jpg?alt=media&token=f1ebfbe0-1b21-4d00-849c-fee3d9c75f14"
          )}
        />
        <Container>
          <Trade />
        </Container>
      </Box>
      <Box
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"alternate.main"}
      >
        <Container>
          <Insights />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          )}
        />
        <Container>
          <Estates />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Container>
          <Blog />
        </Container>
      </Box>

      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        minHeight={"100vh"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Box
          className={"jarallax-img"}
          sx={styles(
            "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Favatar.jpg?alt=media&token=8014b7dc-8cc2-4269-a3a3-b38c77c6aae1"
          )}
        />
        <Container>
          <Wearable />
        </Container>
      </Box>
      <Box
        className={"jarallax"}
        data-jarallax
        data-speed="0.2"
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        id="virtualground-item--js-scroll"
      >
        <Container>
          <Newsletter />
        </Container>
      </Box>
    </Main>
  );
};

export default Home;
