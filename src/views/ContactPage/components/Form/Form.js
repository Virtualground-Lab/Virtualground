/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as FirestoreService from "services/firebase";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  message: yup.string().trim().required("Please specify your message"),
});

const Contact = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    FirestoreService.addContactMessage(
      values.firstName,
      values.lastName,
      values.email,
      values.message
    )
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setOpen(true);
        formik.resetForm();
      })
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box maxWidth={600} margin={"0 auto"}>
      <Box marginBottom={4}>
        <Typography
          variant={"h3"}
          sx={{ fontWeight: 700 }}
          align={"center"}
          gutterBottom
        >
          Contact us
        </Typography>
        <Typography color="text.secondary" align={"center"}>
          For all enquires, please email us using the form below.
        </Typography>
      </Box>

      <Box>
        {!open && (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name*"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Last name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email*"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message*"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item container justifyContent={"center"} xs={12}>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item container justifyContent={"center"} xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking on "submit" you agree to our{" "}
                    <Box
                      component="a"
                      href="/privacy"
                      color={theme.palette.text.primary}
                      fontWeight={"700"}
                    >
                      Privacy Policy
                    </Box>
                    ,{" "}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={"700"}
                    >
                      Data Policy
                    </Box>{" "}
                    and{" "}
                    <Box
                      component="a"
                      href="/terms"
                      color={theme.palette.text.primary}
                      fontWeight={"700"}
                    >
                      Terms of Use
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
        <Grid item container justifyContent={"center"} xs={12}>
          <Collapse in={open}>
            <Alert
              severity="success"
              action={
                <IconButton aria-label="close" color="inherit" size="small">
                  <CloseIcon
                    fontSize="inherit"
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                </IconButton>
              }
              sx={{ mt: 1 }}
            >
              Thank you! Your message has been sent. We'll get back to you in
              1-2 business days.
            </Alert>
          </Collapse>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
