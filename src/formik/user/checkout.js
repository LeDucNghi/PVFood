import * as Yup from "yup";

// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const initialShoppingBagsValues = {
  subtotal: "",
  shipping: "",
  note: "",
  total: "",
  discountCode: null,
};

export const checkoutInitialValues = {
  fullName: "",
  phone: "",
  address: "",
  deliveryName: "",
  paymentMethods: "",
};

export const checkoutValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(1, "Name too short 😒")
    .max(30, "Invalid name 😒")
    .required("Let us know recipient's name 🤔"),

  address: Yup.string()
    .min(1, "Invalid address😒")
    .required("Let us know your address 🤔"),

  phone: Yup.string()
    .required("Let us know your phone number 🤔")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid phone number 😒"
    ),

  email: Yup.string()
    .email("Please let us know your email 🤔")
    .required("Required"),

  // deliveryName: Yup.string()
  //   // .oneOf(
  //   //   ["Self pick-up", "Delivery"],
  //   //   "Don't have any delivery method that you want to find."
  //   // )
  //   .required(
  //     "Please let us know know how you would like to receive the goods 🤔"
  //   ),

  // paymentMethods: Yup.string()
  //   // .oneOf(
  //   //   ["Payment on delivery", "Banking", "Momo E-Wallet"],
  //   //   "Don't have any payment method that you want to find."
  //   // )
  //   .required("Please let us know know how you would like to pay 🤔"),
});
