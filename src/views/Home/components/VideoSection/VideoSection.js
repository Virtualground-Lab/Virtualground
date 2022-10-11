import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
              Virtualground is virtual 3d environment that is fully
              decentralized, completely anonymous and reasonably accessible to
              all. Each environment is isolated from another and designed with
              better graphics optimized for a faster experience with minimal
              loading times.
            </Typography>
          </Box>
          {/* 
          <Button
            size={"large"}
            sx={{ marginTop: 1, marginBottom: 2 }}
            href={"#newsletter"}
            endIcon={
              <Box
                component={"svg"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            Join our newsletter
          </Button>
          */}
          {/*
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box marginBottom={2}>
              <Typography variant="body1" component="p">
                Join our newsletter to get the latest news and updates from us.
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
          */}
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
