import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const mock = [
  {
    title: "Own our impact",
    subtitle:
      "Our impact is greater than our job description. Each of us brings our skills to what we do. We have the freedom and confidence to own ideas and to bring them to life. We hold ourselves to the highest standards and are proud to sign our work with our name.",
  },
  {
    title: "Diversity",
    subtitle:
      "We embrace a culture of individual expression and inclusion. We believe that diverse mindsets and backgrounds foster exceptional ideas. We value personality and uniqueness and treat each other with fairness and respect everywhere we operate.",
  },
  {
    title: "Open communication",
    subtitle:
      "We’re big fans of transparency for many reasons, but the abridged version is: it makes everything we do SO much easier.",
  },
  {
    title: "Integrity is everything",
    subtitle:
      "We conduct our business with the highest level of integrity. We are straightforward and honor our commitments. Every time.",
  },
  {
    title: "Inspiring innovation",
    subtitle:
      "We pioneer new and better ways to serve our clients and grow their businesses. We created an entire industry and continue to look ahead to create tomorrow.",
  },
  {
    title: "Teamwork makes the dream work",
    subtitle:
      "We accelerate each other and are accountable to each other to deliver on our vision.",
  },
];

const CompanyValues = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={"center"}
          color={"text.secondary"}
          sx={{ textTransform: "uppercase" }}
          variant={"subtitle2"}
          fontWeight={600}
        >
          Company values
        </Typography>
        <Typography fontWeight={700} variant={"h4"} align={"center"}>
          Our company culture
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={"h6"} fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyValues;
