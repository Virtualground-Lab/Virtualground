import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import VideocamIcon from "@mui/icons-material/Videocam";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const mock = [
  {
    media:
      "https://images.unsplash.com/photo-1660905419327-9ef1573426ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    eventLink: "https://www.metaverse-xyz.com/",
    title: "Metaverse XYZ",
    eventBy: "Metaverse XYZ",
    time: "Oct 14-15, 2022",
    place: "Online",
    attendies: "",
  },
  {
    media:
      "https://images.unsplash.com/photo-1566132127697-4524fea60007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    eventLink: "https://gbaglobal.org/blockchain-infrastructure/",
    title: "Blockchain & Infrastructure",
    eventBy: "Brock Pierce",
    time: "Sep 29-30, 2022",
    place: "Online",
    attendies: "",
  },
  {
    media:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    eventLink: "https://www.blockchain-expo.com/",
    title: "Blockchain Expo World",
    eventBy: "Blockchain Expo World",
    time: "Dec 1-2, 2022",
    place: "Online",
    attendies: "",
  },
];

const Spaces = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          align={"center"}
          gutterBottom
          color={"secondary"}
        >
          Events
        </Typography>
        <Typography
          variant="h4"
          data-aos={"fade-up"}
          gutterBottom
          align={"center"}
          sx={{
            fontWeight: 700,
          }}
        >
          Join our upcoming events
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          data-aos={"fade-up"}
          align={"center"}
        >
          Here are our upcoming events you might want to learn more.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "stretched", sm: "flex-start" }}
          justifyContent={"center"}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
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
            View all
          </Button>
        </Box>
      </Box>
      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={"0 auto"}>
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
              <Box
                display={"block"}
                width={1}
                height={1}
                sx={{
                  textDecoration: "none",
                  transition: "all .2s ease-in-out",
                  "&:hover": {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{ backgroundImage: "none" }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      position: "relative",
                      height: { xs: 240, sm: 340, md: 280 },
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component={"svg"}
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1921 273"
                      sx={{
                        position: "absolute",
                        width: "100%",
                        left: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <polygon
                        fill={theme.palette.background.paper}
                        points="0,273 1921,273 1921,0 "
                      />
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      position={"absolute"}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      <Button
                        variant={"contained"}
                        color="primary"
                        size="large"
                        href={item.eventLink}
                        startIcon={<NoteAltOutlinedIcon />}
                      >
                        Register
                      </Button>
                    </Box>
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={"h7"}
                      gutterBottom
                      align={"left"}
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      display={"flex"}
                      flexDirection={{ xs: "column", sm: "cloumn" }}
                      alignItems={{ xs: "flex-start", sm: "flex-start" }}
                      justifyContent={"left"}
                      marginTop={1}
                    >
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        marginBottom={1}
                      >
                        <Typography variant={"h8"}>Event by &nbsp;</Typography>
                        <Typography
                          variant={"subtitle1"}
                          sx={{ fontWeight: 800 }}
                          color="text.secondary"
                        >
                          {item.eventBy}
                        </Typography>
                      </Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box
                          component={"svg"}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          marginRight={1}
                        >
                          <VideocamIcon />
                        </Box>
                        <Typography
                          variant={"subtitle1"}
                          color="text.secondary"
                        >
                          {item.place}
                        </Typography>
                      </Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box
                          component={"svg"}
                          width={24}
                          height={24}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          marginRight={1}
                        >
                          <CalendarMonthIcon />
                        </Box>
                        <Typography
                          variant={"subtitle2"}
                          color="text.secondary"
                        >
                          {item.time}
                        </Typography>
                      </Box>
                    </Box>
                    {item.attendies && (
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <Box
                            component={"svg"}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            marginRight={1}
                          >
                            <PeopleAltIcon />
                          </Box>
                          <Typography
                            variant={"subtitle2"}
                            color="text.secondary"
                          >
                            {item.attendies}
                          </Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                          <Button href={item.eventLink}>Learn more</Button>
                        </Box>
                      </Box>
                    )}
                  </CardContent>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Spaces;
