import "./styles/Profile.css";

import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from "@mui/material";
import InputField from "../components/Profile/InputField";
import Loading from "components/Common/Loading/Loading";
import UploadAvt from "../components/Profile/UploadAvt";
import { handleUpdateProfile } from "../accountThunk";
import { selectAccountDetail } from "../accountSlice";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const dispatch = useDispatch();
  const accountDetail = useSelector(selectAccountDetail);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const time = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(time);
  }, []);

  const profileInitialValues = {
    name:
      accountDetail && accountDetail.data.displayName
        ? accountDetail.data.displayName
        : accountDetail.address
        ? accountDetail.address[0].name
        : "",

    // accountDetail.address
    //   ? accountDetail.address[0].name
    //   : "",
    email: accountDetail ? accountDetail.data.email : "",
    phone:
      accountDetail && accountDetail.data.phoneNumber
        ? accountDetail.data.phoneNumber
        : accountDetail.address
        ? accountDetail.address[0].phone
        : "",
    address:
      accountDetail && accountDetail.address
        ? accountDetail.address[0].address
        : "",

    gender: accountDetail ? accountDetail.data.gender : "",
    avatarUrl: accountDetail ? accountDetail.data.photoURL : null,
  };

  if (isLoading) return <Loading height="80%" />;

  return (
    <Formik
      enableReinitialize
      initialValues={profileInitialValues}
      // validationSchema={addUserValidation}
      onSubmit={(values) => dispatch(handleUpdateProfile(values))}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          setFieldValue,
          isSubmitting,
        } = formikProps;

        return (
          <Form className="profile_container">
            <UploadAvt values={values} setFieldValue={setFieldValue} />

            <Divider
              sx={{ margin: "auto 1em", height: "70%" }}
              orientation="vertical"
              flexItem
            />

            <InputField
              touched={touched}
              errors={errors}
              values={values}
              onBlur={handleBlur}
              onChange={handleChange}
              isSubmitting={isSubmitting}
              setFieldValue={setFieldValue}
            />
          </Form>
        );
      }}
    </Formik>
  );
}
