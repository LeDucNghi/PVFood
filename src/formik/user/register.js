import * as Yup from "yup";

export const registerInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const registerValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
