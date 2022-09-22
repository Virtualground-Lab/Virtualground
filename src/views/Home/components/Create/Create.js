/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Create = () => {
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
        Create
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
        With the Builders tool and SDK, you can create scenes, artworks,
        challenges and more. If you have more experience, you can use the SDK to
        add games and applications to our open-ended world.
      </Typography>
    </Box>
  );
};

export default Create;
