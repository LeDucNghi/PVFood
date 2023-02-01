import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import { selectShippingInfo } from "../checkoutSlice";
import { useSelector } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";

function PaymentInfo({ setValue }) {
  const shippingInfo = useSelector(selectShippingInfo);

  return (
    <>
      <div className="payment_contact">
        <h2>Contact and Shipping information</h2>
        <div className="contact">
          <div className="contact_content">
            <h4>Shipping address / Billing address</h4>
            <h3>
              <PersonIcon sx={{ mr: "1em" }} fontSize="large" />
              {shippingInfo && shippingInfo.userInfo
                ? shippingInfo.userInfo.fullName
                : ""}
            </h3>
            <p>
              <LocalPhoneIcon sx={{ mr: "1em" }} fontSize="large" />
              {shippingInfo && shippingInfo.userInfo
                ? shippingInfo.userInfo.phone
                : ""}{" "}
            </p>
            <p>
              <PlaceIcon sx={{ mr: "1em" }} fontSize="large" />
              {shippingInfo && shippingInfo.userInfo
                ? shippingInfo.userInfo.address
                : ""}
            </p>
          </div>
          <span onClick={() => setValue(`1`)}>Edit</span>
        </div>
      </div>
      <div className="payment_contact">
        <h2>Shipping method</h2>
        <div className="contact">
          <div className="contact_content">
            <h3>
              <LocalAtmIcon sx={{ mr: "1em" }} fontSize="large" />
              {shippingInfo && shippingInfo.userInfo
                ? shippingInfo.userInfo.paymentMethods
                : ""}{" "}
            </h3>
            <p>
              <EventNoteIcon sx={{ mr: "1em" }} fontSize="large" />{" "}
              {shippingInfo && shippingInfo.userInfo
                ? shippingInfo.userInfo.note
                : ""}
            </p>
          </div>
          <span onClick={() => setValue(`1`)}>Edit</span>
        </div>
      </div>
    </>
  );
}

const Error = ({ error }) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default withErrorBoundary(PaymentInfo, {
  FallbackComponent: Error,
});
