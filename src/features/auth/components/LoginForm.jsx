import {
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { LoginSchema, defaultValues } from "formik/user";

import Iconify from "components/Layouts/Dashboard/Iconify";
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { singin } from "../authThunk";
import { useDispatch } from "react-redux";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={LoginSchema}
      // onSubmit={(values) => dispatch(signinWithOAuth(values))}
      onSubmit={(values) => dispatch(singin({ values, isLogin: true }))}
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
              <TextField
                id="outlined-error-helper-text"
                autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                label="Email address"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                id="outlined-error-helper-text"
                autoComplete="password"
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
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
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Typography>
                Don't have an account?{" "}
                <WavyLink duration={1000} color="#f08080" to="/register">
                  <Link
                    variant="subtitle2"
                    underline="hover"
                    component={RouterLink}
                  >
                    Signup
                  </Link>
                </WavyLink>
              </Typography>

              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}
