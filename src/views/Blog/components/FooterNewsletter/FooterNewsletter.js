import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Container from "components/Container";
import * as FirestoreService from "services/firebase";

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
});

const FooterNewsletter = () => {
  const theme = useTheme();
  const [emailUploaded, setEmailUploaded] = useState(false);

  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    FirestoreService.addBlogNewsletterEmail(values.email)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setEmailUploaded(true);
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
    <Box bgcolor={"primary.main"} borderRadius={2}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box marginBottom={4}>
              <Typography
                variant="h4"
                align={"center"}
                data-aos={"fade-up"}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                Get our stories delivered
              </Typography>
              <Typography
                variant="h6"
                align={"center"}
                sx={{
                  color: theme.palette.common.white,
                }}
                data-aos={"fade-up"}
              >
                Subscribe to recieve our blogs to your inbox
              </Typography>
            </Box>

            <Box width={1} display={"flex"} justifyContent={"center"}>
              {!emailUploaded && (
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{
                    maxWidth: 400,
                    width: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                    "& .MuiInputAdornment-root svg": {
                      color: "white !important",
                    },
                  }}
                  data-aos="fade-up"
                >
                  <OutlinedInput
                    name={"email"}
                    placeholder="Enter your email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    endAdornment={
                      <InputAdornment position="end">
                        <NotificationsIcon fontSize="large" />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
            </Box>
          </Box>
        </form>
        <Box width={1} display={"flex"} justifyContent={"center"}>
          <Collapse in={emailUploaded}>
            <Alert
              severity="success"
              color="primary"
              action={
                <IconButton aria-label="close" size="small">
                  <CloseIcon
                    fontSize="inherit"
                    onClick={() => {
                      setEmailUploaded(false);
                    }}
                  />
                </IconButton>
              }
              sx={{ mt: 1 }}
            >
              You have succefully subscribed.
            </Alert>
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterNewsletter;
