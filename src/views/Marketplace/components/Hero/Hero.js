import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { colors } from "@mui/material";
import { Room1 } from "threejs";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Explore{" "}
              <Typography
                color={"primary"}
                component={"span"}
                variant={"inherit"}
                sx={{
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Virtualground marketplace.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Welcome to our virtual shop for digital assets starting from
            </Typography>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700, color: colors.red[400] }}
            >
              1VGR
            </Typography>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={2}
            >
              Discover the assets
            </Box>
          </Box>
          {/* 
          <Box
            paddingX={2}
            paddingY={1}
            bgcolor={'alternate.dark'}
            borderRadius={2}
          >
            <Typography variant="body1" component="p">
              
            </Typography>
          </Box>
          */}
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        xs={12}
        md={6}
      >
        <Box height={1} width={1} maxWidth={600} minHeight={500} xs={12} md={6}>
          <Room1 />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
