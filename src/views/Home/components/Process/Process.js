/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const mock = [
  {
    title: 300,
    subtitle: "avatar wearables to choose from.",
    suffix: "+",
  },
  {
    title: 45,
    subtitle: "3D environment to choose.",
    suffix: "+",
  },
  {
    title: 99,
    subtitle: "of user satisfaction.",
    suffix: "%",
  },
];

const Process = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} md={6} data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "medium",
              }}
              gutterBottom
              color={"secondary"}
            >
              Insights
            </Typography>
            <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
              We are a growing virtual world platform aimed user interactions.
            </Typography>
            <Typography color="text.secondary">
              Unlike other platforms, we focus on meetings and interactions.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h4" gutterBottom color="primary">
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography color="text.secondary" component="p">
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fpexels-julia.jpg?alt=media&token=4e71b678-d3aa-44e4-8988-50e905ba68a6"
              sx={{
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
              }}
            />
          </Box>
          {/*
          <Card component={Card} boxShadow={4} height={1} width={1}>
            <CardMedia
              component="video"
              src="https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/videos%2FUntitled.mp4?alt=media&token=a20339fb-52e1-484e-aec7-52c860ad50f9"
              autoplay="allow"
              controls
              autosx={{
                height: 1,
                width: 1,
                minHeight: 1,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Card>
            */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
