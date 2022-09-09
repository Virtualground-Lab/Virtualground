import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "blocks/web3";
import { NavItem } from "./components";

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="Virtualground"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light" && !colorInvert
              ? "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572"
              : "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Flogo2.png?alt=media&token=55fcb307-a743-4c3e-9b9d-a4d9f3512572"
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem items={pages} colorInvert={colorInvert} />
        </Box>

        <Box marginLeft={4}>
          <Login />
        </Box>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.array,
  colorInvert: PropTypes.bool,
};

export default Topbar;
