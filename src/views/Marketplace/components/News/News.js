import React from "react";
import Slider from "react-slick";
import { alpha, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const mock = [
  {
    newsTitle:
      "Working from home is always more comfortable and productive. With VR technologies, we are expecting the development of virtual offices. With this technology, one can work from anywhere. Connected digital printers, uninterrupted tasks, etc. are the additional features that can be expected with this concept.",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Foculus.jpg?alt=media&token=182dbf54-b4d6-4b19-b4be-82d63550d607",
  },
  {
    newsTitle:
      "82% of healthcare professionals agree that virtual reality creates a convenient way of accessing and learning information for medical students and practicing healthcare professionals, Accenture says. The agency also reports that 62% of patients would welcome virtual reality healthcare services as an alternative to traditional healthcare.",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fvrhealth.jpg?alt=media&token=69c60083-7f51-47da-9128-e08ab43850af",
  },
];

const LatestNews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isMd,
  };

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position={"relative"} zIndex={2}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: "medium",
            }}
            gutterBottom
            color={"secondary"}
            align={"center"}
          >
            Latest News
          </Typography>
          <Typography
            variant="h4"
            align={"center"}
            data-aos={"fade-up"}
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Our latest news
          </Typography>
          <Typography
            variant="h6"
            align={"center"}
            color={"text.secondary"}
            data-aos={"fade-up"}
          >
            Get latest news through our blogs.
          </Typography>
          <Box display="flex" justifyContent={"center"} marginTop={2}>
            <Button variant="contained" color="primary" size="large">
              Browse the blog
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: "auto", md: 1 },
            "& .slick-slide img": {
              objectFit: "cover",
            },
            "& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div":
              {
                height: { xs: "auto", md: 1 },
              },
            "& .slick-prev, & .slick-next": {
              zIndex: 2,
              bottom: 0,
              top: "100%",
              left: "100%",
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              "&:before": {
                fontSize: 32,
                color: "primary.main",
              },
            },
            "& .slick-prev": {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    boxShadow: 0,
                    background: "transparent",
                  }}
                >
                  <CardMedia
                    image={item.avatar}
                    sx={{
                      height: 300,
                      width: "100%",
                      maxWidth: 400,
                      borderRadius: 2,
                      margin: { xs: "0 auto", md: "none" },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >
                    <Box>
                      <Typography
                        color="text.primary"
                        variant={"h6"}
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        {item.newsTitle}
                      </Typography>
                      <Box
                        marginTop={2}
                        display={"flex"}
                        justifyContent={{ xs: "center", md: "flex-start" }}
                      >
                        <Button
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
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestNews;
