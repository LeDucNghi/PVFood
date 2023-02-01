import * as Yup from "yup";

export const addUserinitialValues = {
  name: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  address: "",
  role: "",
  password: "",
  avatarUrl: null,
};

export const createNewUserInitialValues = {
  name: "",
  email: "",
  phone: "",
  country: null,
  state: null,
  city: null,
  address: "",
  role: "",
  password: "",
  avatarUrl: null,
};

export const fake_options = [
  "Hà Nội",
  "Thành phố Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
];

export const addUserValidation = Yup.object({
  name: Yup.string()
    .required("Please enter your full name 🤔")
    .matches(
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
      "Invalid name"
    ),

  email: Yup.string()
    .email("Invalid email !!")
    .required("Please enter your email 🤔"),

  phone: Yup.number()
    .min(0, "Min is 0")
    // .max(10, "Max is 11")
    .required("Please enter phone number.")
    .typeError("Please enter a valid number."),

  country: Yup.string()
    .oneOf(fake_options, `Please select either one of these.`)
    .required("Please select country. 🤔"),

  state: Yup.string()
    .oneOf(fake_options, `Please select either one of these.`)
    .required("Please select state. 🤔"),

  city: Yup.string()
    .oneOf(fake_options, `Please select either one of these.`)
    .required("Please select city. 🤔"),

  address: Yup.string().required("Please enter your address. 🤔"),

  role: Yup.string()
    .oneOf(["user", "admin"], "Please select either user or admin.")
    .required(`Please select role.`),

  password: Yup.string().required(`Please enter your password.`),
});
