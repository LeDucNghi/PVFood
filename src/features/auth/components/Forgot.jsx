import "./styles/Forgot.css";
import "./styles/Login.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { forgotInitialValues, forgotValidation } from "formik/user";

import { CircularProgress } from "@mui/material";
import { handleResetPassword } from "../authThunk";
import { useDispatch } from "react-redux";

function ForgotPass(props) {
  const { openLoginForm } = props;

  const dispatch = useDispatch();

  return (
    <div className="forgot_contain">
      <Formik
        initialValues={forgotInitialValues}
        validationSchema={forgotValidation}
        onSubmit={(values, { setSubmitting }) =>
          dispatch(handleResetPassword(values))
        }
      >
        {(formikProps) => {
          const { isSubmitting, isValid } = formikProps;
          return (
            <Form className="login_form">
              <div className="login-text">
                <h2>Forgot password?</h2>
              </div>
              <div className="input_contain">
                <div className="email input">
                  <Field
                    name="email"
                    type="text"
                    placeholder=" "
                    className="input_item"
                    spellCheck="false"
                  />
                  <label htmlFor="your email address" className="input_label">
                    your email address
                  </label>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="forgot request">
                <span onClick={openLoginForm}>Back to Login</span>
              </div>
              <div className="submit submit_request">
                <button
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  className="register "
                >
                  {isSubmitting ? (
                    <CircularProgress color="success" />
                  ) : (
                    "Request password"
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      {/* <Notification notify={notify} open={open} setOpen={setOpen} /> */}
    </div>
  );
}

export default ForgotPass;
