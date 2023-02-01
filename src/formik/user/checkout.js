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

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(1, "Tên quá ngắn 😒")
    .max(30, "Tên không hợp lệ 😒")
    .required("Hãy cho chúng tôi biết tên người nhận 🤔"),

  address: Yup.string()
    .min(1, "Địa chỉ không hợp lệ😒")
    .required("Hãy cho chúng tôi biết địa chỉ của bạn 🤔"),

  phone: Yup.string()
    .required("Hãy cho chúng tôi biết số điện thoại của bạn 🤔")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Số điện thoại không hợp lệ 😒"
    ),
});
