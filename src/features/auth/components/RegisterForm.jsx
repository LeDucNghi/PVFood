import * as Yup from "yup";

import { Form, Formik } from "formik";
import {
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Iconify from "components/Common/Header/Iconify";
import { LoadingButton } from "@mui/lab";
import { WavyLink } from "react-wavy-transitions";
import { createUser } from "../authThunk";
import { useDispatch } from "react-redux";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    // firstName: Yup.string().required("First name required"),
    // lastName: Yup.string().required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={RegisterSchema}
      // onSubmit={(values) => dispatch(signupNewUser(values))}
      onSubmit={(values) => dispatch(createUser(values))}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isSubmitting,
        } = formikProps;
        return (
          <Form>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  sx={{ width: "49%" }}
                  value={values.firstName}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  id="outlined-error-helper-text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="firstName"
                  label="First name"
                />

                <TextField
                  sx={{ width: "49%" }}
                  value={values.lastName}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  id="outlined-error-helper-text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="lastName"
                  label="Last name"
                />
              </Stack>

              <TextField
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                id="outlined-error-helper-text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                label="Email address"
              />

              <TextField
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                id="outlined-error-helper-text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Iconify
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
                <Typography>
                  Already have an account?{" "}
                  <WavyLink duration={1000} color="#f08080" to="/login">
                    <Link
                      variant="subtitle2"
                      underline="hover"
                      // component={RouterLink}
                    >
                      Signin
                    </Link>
                  </WavyLink>
                </Typography>
              </Stack>

              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{
                  color: "#fff",
                  fontSize: "0.8em",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                  backgroundColor: "#d4a0a2",
                  "&:hover": {
                    backgroundColor: "#d4a0a2",
                    "&:disabled": {
                      cursor: "not-allowed",
                    },
                  },
                }}
              >
                Register
              </LoadingButton>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
}
