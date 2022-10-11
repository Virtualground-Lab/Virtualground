/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const SidebarNewsletter = ({ buttonFunc }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      component={Card}
      variant={"outlined"}
      padding={2}
      bgcolor={"transparent"}
    >
      <Grid container spacing={4}>
        {isMd ? (
          <Grid item container justifyContent={"center"} xs={12}>
            <Box height={1} width={1} maxWidth={"80%"}>
              <Box
                component={"img"}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fchat.svg?alt=media&token=ad0ef0ba-72aa-48bc-ae4c-e5492d92888f"
                }
                width={1}
                height={1}
                sx={{
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
                }}
              />
            </Box>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            Please login to comment
          </Typography>
          <Box width={1} display={"flex"}>
            <Button
              size={"large"}
              sx={{ marginTop: 1, marginBottom: 2 }}
              onClick={buttonFunc}
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
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SidebarNewsletter;

SidebarNewsletter.propTypes = {
  name: PropTypes.func.isRequired,
};
