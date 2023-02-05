import "./styles/Password.css";

import { Form, Formik } from "formik";
import { FormControl, InputLabel } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import InputAdornment from "@mui/material/InputAdornment";
import { LoadingButton } from "@mui/lab";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { handleChangePassword } from "../accountThunk";
import { useDispatch } from "react-redux";
import { useState } from "react";

// import { styled } from "@mui/styles";

export default function Password() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    confirmPass: false,
  });

  const initialValues = {
    oldPass: "",
    newPass: "",
    confirmPass: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={LoginSchema}
      onSubmit={(values) => dispatch(handleChangePassword(values))}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isSubmitting,
          dirty,
        } = formikProps;
        return (
          <Form className="password_container">
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Old Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword.oldPass ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                size="medium"
                className="password_field"
                fullWidth
                // id="outlined-error-helper-text"
                label="Old Password"
                variant="outlined"
                value={values.oldPass}
                name="oldPass"
                error={touched.oldPass && Boolean(errors.oldPass)}
                helperText={touched.oldPass && errors.oldPass}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          oldPass: !showPassword.oldPass,
                        })
                      }
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.oldPass ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <div className="password_new">
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword.newPass ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  className="password_field"
                  fullWidth
                  // id="outlined-error-helper-text"
                  label="New Password"
                  variant="outlined"
                  value={values.newPass}
                  name="newPass"
                  error={touched.newPass && Boolean(errors.newPass)}
                  helperText={touched.newPass && errors.newPass}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowPassword({
                            ...showPassword,
                            newPass: !showPassword.newPass,
                          })
                        }
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword.newPass ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <span>
                <InfoIcon className="icon" /> Password must be minimum 6+
              </span>
            </div>

            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword.confirmPass ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                size="medium"
                className="password_field"
                fullWidth
                // id="outlined-error-helper-text"
                label="Confirm New Password"
                variant="outlined"
                value={values.confirmPass}
                name="confirmPass"
                error={touched.confirmPass && Boolean(errors.confirmPass)}
                helperText={touched.confirmPass && errors.confirmPass}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          confirmPass: !showPassword.confirmPass,
                        })
                      }
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.confirmPass ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <LoadingButton
              sx={{
                margin: "2em 0",
                color: "#000",
                backgroundColor: "#f3e0d0", //   "&:hover": {

                "&:hover": {
                  backgroundColor: "#f5e3cf",
                  "&:disabled": {
                    cursor: "not-allowed",
                  },
                },
              }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting || !dirty}
              loading={isSubmitting}
            >
              Save
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}

// const ColorButton = styled(LoadingButton)(({ theme }) => ({
//   color: "#000",

//   backgroundColor: "#f3e0d0",
//   "&:hover": {
//     backgroundColor: "#f5e3cf",
//     "&:disabled": {
//       cursor: "not-allowed",
//     },
//   },
// }));
