/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Trade = () => {
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
        Trade
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
        Decentralized marketplace where you can buy and sell collectibles,
        avatars, wearables, and items in the virtual universe. The blockchain
        based system allows for fast and fair transactions while protecting your
        items from fraud.
      </Typography>
    </Box>
  );
};

export default Trade;
