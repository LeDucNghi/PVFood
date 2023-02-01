import * as Yup from "yup";

export const productInitialValues = {
  name: "",
  category: "",
  price: null,
  qty: null,
  imageUrl: null,
};

export const productValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});
