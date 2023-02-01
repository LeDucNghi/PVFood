import * as Yup from "yup";

export const forgotInitialValues = {
  email: "",
  newPassword: "",
  oobCode: "",
};

export const forgotValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});
