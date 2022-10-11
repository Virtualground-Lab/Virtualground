import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Page from "../components/Page";
import Main from "layouts/Main";
import * as FirestoreService from "services/firebase";
import { WalletContext } from "blocks/Web3Auth/config";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
});

const General = () => {
  const { connected, accountAddress } = useContext(WalletContext);
  const [open, setOpen] = useState(false);

  const initialValues = {
    name: "",
    avatar: "hi",
  };

  const onSubmit = (values) => {
    FirestoreService.addUser(accountAddress, values.name)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setOpen(true);
      })
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Main>
      <Page>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your private information
          </Typography>
          <Typography variant={"subtitle2"} color={"text.secondary"}>
            Please read our{" "}
            <Link color={"primary"} href={"/company-terms"} underline={"none"}>
              terms of use
            </Link>{" "}
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          {connected && (
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant={"subtitle2"}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Enter your name
                  </Typography>
                  <TextField
                    label="Name *"
                    variant="outlined"
                    name={"name"}
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>

                <Grid item container xs={12}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "stretched", sm: "center" }}
                    justifyContent={"space-between"}
                    width={1}
                    margin={"0 auto"}
                  >
                    {/* 
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={"subtitle2"}>
                      You may also consider to update your{" "}
                      <Link
                        color={"primary"}
                        href={"/account-billing"}
                        underline={"none"}
                      >
                        billing information.
                      </Link>
                    </Typography>
                  </Box>
                  */}
                    <Button
                      size={"large"}
                      variant={"contained"}
                      type={"submit"}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
          {!connected && (
            <Typography
              variant={"subtitle2"}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Please login first
            </Typography>
          )}
        </Box>
      </Page>
    </Main>
  );
};

export default General;
