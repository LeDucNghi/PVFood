import "./ReviewOrder.css";

import { Button, CircularProgress } from "@mui/material";
import {
  selectIsLoading,
  selectIsSuccess,
} from "features/users/checkout/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";

import PaymentInfo from "features/users/checkout/components/PaymentInfo";
import ScrollToTop from "components/Common/ScrollToTop/ScrollToTop";
import { handleCheckout } from "features/users/checkout/checkoutThunk";
import { selectAccountDetail } from "features/users/account/accountSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReviewOrder({ setValue }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const isSuccess = useSelector(selectIsSuccess);
  const accountDetail = useSelector(selectAccountDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleCheckout(accountDetail));
  };

  useEffect(() => {
    if (isSuccess === true) {
      localStorage.removeItem("cart");
      navigate(`/success`);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <ScrollToTop />
      <form className="payment_container" onSubmit={(e) => handleSubmit(e)}>
        <PaymentInfo setValue={setValue} />

        <div className="payment_btn">
          <Button
            variant="outlined"
            type="button"
            className="button"
            // onClick={() => navigate(`/product/food`)} // onClick={() => navigator.clipboard.writeText(`bla bla`)}
          >
            Information
          </Button>

          <Button
            type="submit"
            className="button"
            // disabled={isLoading || !isValid || !dirty} // onClick={showPaymentForm}
            variant="contained"
          >
            {isLoading === true ? (
              <CircularProgress size={20} color="success" />
            ) : (
              "Pay"
            )}
          </Button>
          {/* <button type="button" className="edit" onClick={() => setValue(`1`)}>
            Information
          </button>
          <button type="submit" className="payment">
            {isLoading === true ? (
              <CircularProgress size={20} color="success" />
            ) : (
              "Pay"
            )}
          </button> */}
        </div>
      </form>
    </>
  );
}

export default ReviewOrder;
