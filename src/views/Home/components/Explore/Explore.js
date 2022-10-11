/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Explore = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        align={"center"}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: "uppercase",
        }}
      >
        Explore
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={"center"}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        You can choose from a variety of 3D environments tailored for different
        activities, such as having fun with friends or colleagues or holding
        business meetings and much more.
      </Typography>
    </Box>
  );
};

export default Explore;
