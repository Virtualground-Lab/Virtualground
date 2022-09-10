import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Login from "blocks/Login";

const VideoSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "medium",
              }}
              gutterBottom
              color={"secondary"}
            >
              Why?
            </Typography>
            <Typography
              color={"primary"}
              component={"span"}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              Why choose Virtualground?
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Our mission is to provide a decentralized virtual space where
              anyone can join and interact with each other. Each 3d environment
              is isolated with another and designed with better graphics,
              optimized for faster user interaction and loading time.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box marginBottom={2}>
              <Typography variant="body1" component="p">
                Join over 1000 users for our services.
              </Typography>
            </Box>
            <Box
              component={"form"}
              noValidate
              autoComplete="off"
              sx={{
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                  bgcolor: "background.paper",
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretched", sm: "flex-start" }}
              >
                <Login connectBtnName="Connect with wallet" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box height={1} width={1} maxHeight={600}>
            <Box
              component={"iframe"}
              title="video"
              width="100%"
              height="100%"
              minHeight={320}
              src="https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/videos%2FhomeVideo.mp4?alt=media&token=4a86c2e5-010e-48b7-800e-da06637715fa"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
