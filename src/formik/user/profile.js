import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const profileInitialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  ward: "",
  district: "",
  city: "",
  gender: "",
};

export const profileValidation = Yup.object({
  firstName: Yup.string()
    .min(1, "Must be at least 1 characters")
    .max(10, "Can be more than 10 characters")
    .required("Please let us know your first name 🤔"),

  lastName: Yup.string()
    .min(1, "Must be at least 1 characters")
    .max(10, "Must be at least 10 characters")
    .required("Please let us know your last name 🤔"),

  email: Yup.string()
    .email("Please let us know your email 🤔")
    .required("Required"),

  phone: Yup.string()
    .required("Please let us know your Phone number 🤔")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Your phone number is not available"
    ),

  image: Yup.mixed()
    .nullable()
    .test(
      "FILE_SIZE",
      "File too large",
      (value) => !value || (value && value.size <= 2000000)
    )
    .test(
      "FILE_FORMAT",
      "Unsupported file type",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    )
    .required("Please choose image for your profile"),
});
