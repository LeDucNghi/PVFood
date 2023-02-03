import { Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import {
  selectIsLoading,
  selectNote,
  selectShoppingInfo,
} from "../checkoutSlice";
import { useDispatch, useSelector } from "react-redux";

import DeliveryMethods from "./Delivery";
import { PaymentMethod } from "./PaymentMethods";
import ShippingAddress from "./ShippingAddress";
import { handleCheckInfo } from "../checkoutThunk";
import { selectAccountDetail } from "features/account/accountSlice";

export function AddressForm({ setValue }) {
  const dispatch = useDispatch();

  const accountDetail = useSelector(selectAccountDetail);
  const isLoading = useSelector(selectIsLoading);
  const shoppingInfo = useSelector(selectShoppingInfo);
  const notes = useSelector(selectNote);

  const defaultAddress =
    accountDetail &&
    accountDetail.address &&
    accountDetail.address.length !== 0 &&
    accountDetail.address.find((el) => el.default === true);

  const info = {
    ...shoppingInfo,
    note: notes,
  };

  const checkoutInitialValues = {
    fullName: defaultAddress ? defaultAddress.name : "",
    phone: defaultAddress ? defaultAddress.phone : "",
    address: defaultAddress ? defaultAddress.address : "",
    deliveryName: "",
    paymentMethods: "",
    email: accountDetail ? accountDetail.email : "",
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={checkoutInitialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => dispatch(handleCheckInfo(values, setValue, info))}
    >
      {(formikProps) => {
        const { values, isValid, handleBlur, handleChange, dirty } =
          formikProps;
        return (
          <Form className="checkout_address">
            <h2>Shipping address</h2>
            <div className="address_content">
              <ShippingAddress
                values={values}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="checkout_delivery">
                <h2>Delivery methods</h2>

                <DeliveryMethods />

                <h2>Choose a payment method</h2>

                <PaymentMethod />

                <div className="required">
                  <b>* Required Field</b>
                </div>
                <div className="checkout_btn">
                  <Button
                    variant="outlined"
                    type="button"
                    className="button"
                    // onClick={() => navigate(`/product/food`)} // onClick={() => navigator.clipboard.writeText(`bla bla`)}
                  >
                    Continue shopping
                  </Button>

                  <Button
                    type="submit"
                    className="button"
                    disabled={isLoading || !isValid || !dirty} // onClick={showPaymentForm}
                    variant="contained"
                  >
                    {isLoading ? (
                      <CircularProgress size={20} color="success" />
                    ) : (
                      " Go to payment"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
