import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const mock = [
  {
    alt: "virtualground",
    title: "Platform",
    description:
      "Explore virtual environments to experience incredible scenes and structures. Choose your personalized space on Virtualground to organise events.",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fplatform.svg?alt=media&token=52ce495e-25c8-4e80-b545-9810813e76a1",
    illustrationDark:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fplatform.svg?alt=media&token=52ce495e-25c8-4e80-b545-9810813e76a1",
    color: colors.blue[200],
    route: "/platform",
  },
  {
    alt: "virtualground marketplace",
    title: "Marketplace",
    description:
      "Buy, sell or rent Space, Avatar, Wearables and other Digital assets in Virtualground Marketplace backed by the ethereum blockchain.",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fmarketplace.svg?alt=media&token=beddc94a-ec1c-42f4-b756-7d0591630dd2",
    illustrationDark:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fmarketplace.svg?alt=media&token=beddc94a-ec1c-42f4-b756-7d0591630dd2",
    color: colors.purple[200],
    route: "/marketplace",
  },
  {
    alt: "virtualground builder",
    title: "Builder",
    description:
      "With easy-to-use tools, the Builder makes world building fun. Create your own 3d models and deploy it on marketplace.  Let your creativity loose.",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fbuilder.svg?alt=media&token=26e567a0-5460-482d-ba73-6887f266e912",
    illustrationDark:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fbuilder.svg?alt=media&token=26e567a0-5460-482d-ba73-6887f266e912",
    color: colors.indigo[200],
    route: "/builder",
  },
  {
    alt: "virtualground compatibility",
    title: "Compatibility",
    description:
      "Virtualground runs entirely in your web browser, just like a website, therefore there is no software to download.",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fcompatibility.svg?alt=media&token=24ab31b4-9d37-4a5d-9558-48386bdc3122",
    illustrationDark:
      "https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/images%2Fcompatibility.svg?alt=media&token=24ab31b4-9d37-4a5d-9558-48386bdc3122",
    color: colors.green[200],
    route: "/platform",
  },
];

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

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
          Solutions
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
          Your new virtual events solution is here
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          data-aos={"fade-up"}
          align={"center"}
        >
          Virtualground focus on providing solutions for virtual events
          <br />
          Here’s what makes us different.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(item.color, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: "translateY(80px)" } : "none",
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  marginBottom={{ xs: 2, md: 4 }}
                  sx={{
                    "& .lazy-load-image-loaded": {
                      maxWidth: { xs: "80%", md: "70%" },
                    },
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    alt={item.alt}
                    src={
                      theme.palette.mode === "light"
                        ? item.illustration
                        : item.illustrationDark
                    }
                    width={1}
                  />
                </Box>
                <Box>
                  <Typography
                    variant={"h6"}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    size={"large"}
                    sx={{ marginTop: 1, marginBottom: 2 }}
                    href={item.route}
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
                    Explore
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;