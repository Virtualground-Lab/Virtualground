import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const mock = [
  {
    media:
      "https://hbr.org/resources/images/article_assets/2022/05/R2204N_CEN.png",
    eventLink: "https://hbr.org/2022/07/exploring-the-metaverse",
    title: "Exploring the Metaverse",
    blogBy: "Thomas Stackpole",
    date: "Jul-Aug, 2022",
    subtitle:
      "With the world what it is these days, you can see why people might be itching for an alternate reality...",
  },
  {
    media:
      "https://hbr.org/resources/images/article_assets/2022/04/Apr22_05_1166494397.jpg",
    eventLink: "https://hbr.org/2022/04/how-the-metaverse-could-change-work",
    title: "How the Metaverse Could Change Work",
    blogBy: "Mark Purdy",
    date: "Apr 05, 2022",
    subtitle:
      "Imagine a world where you could have a beachside conversation with your colleagues...",
  },
  {
    media:
      "https://hbr.org/resources/images/article_assets/2020/09/Sep20_18_1171377963.jpg",
    eventLink:
      "https://hbr.org/2020/09/is-vr-the-future-of-corporate-training?ab=at_art_art_1x4_s02",
    title: "Is VR the Future of Corporate Training?",
    blogBy: "Jeremy Bailenson",
    date: "Sep 18, 2020",
    subtitle:
      "Soldiers, surgeons, and astronauts have trained for decades in virtual reality (VR). People learn best by doing...",
  },
  {
    media:
      "https://hbr.org/resources/images/article_assets/2022/01/Jan22_03_1270015925.jpg",
    eventLink: "https://hbr.org/2022/01/how-brands-can-enter-the-metaverse",
    title: "How Brands Can Enter the Metaverse",
    blogBy: "Janet Balis",
    date: "Jan 03, 2022",
    subtitle:
      "There are quite a few people who believe that the latest paradigm shift for the internet is already well...",
  },
];

const Blog = () => {
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
          Blogs
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
          From the blog.
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          data-aos={"fade-up"}
          align={"center"}
        >
          Get latest news through our blogs.
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
            href="/blog-newsroom"
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
            More Articles
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
                        <Typography
                          variant={"subtitle2"}
                          sx={{ fontStyle: "italic" }}
                          color="text.secondary"
                        >
                          {item.blogBy} - {item.date}
                        </Typography>
                      </Box>
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography
                          variant={"subtitle1"}
                          color="text.secondary"
                        >
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <Button href={item.eventLink}>Read more</Button>
                      </Box>
                    </Box>
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

export default Blog;
