import * as Yup from "yup";

export const commentInitialValues = {
  comment: "",
  experience: "",
  rate: null,
};

export const commentValidation = Yup.object().shape({
  comment: Yup.string()
    .min(1, "Too short 😒")
    .required("Please let us know your thinking 🤔"),

  rate: Yup.string().required("Please let us know your experience 🤔"),
});
