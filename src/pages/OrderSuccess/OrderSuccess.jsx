import "./OrderSuccess.css";

import Bill from "features/products/components/Bill";
import { Button } from "@mui/material";
import CustomModal from "components/Common/Modal/Modal";
import { Images } from "constants/images";
import { WavyLink } from "react-wavy-transitions";
import { selectInfo } from "features/checkout/checkoutSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const info = useSelector(selectInfo);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!info) navigate(`/product`);
  }, [info, navigate]);

  return (
    <>
      <div className="success_container">
        <div className="success_content">
          <h1>Thank you !</h1>
          <p>We are preparing for your order. </p>
          <p>Thank you for buying products in our store 🥳. </p>
          <p>Please note your order ID 👇. </p>
          <div className="success_button_contain">
            <WavyLink duration={1000} color="#f08080" to="/product">
              <Button
                className="success_button"
                sx={{
                  bgcolor: "#d4a0a2",
                  "&:hover ": {
                    background: "#d4a0a2",
                  },
                }}
                size="large"
                variant="contained"
              >
                Continue Shopping
              </Button>
            </WavyLink>

            <Button
              className="success_button"
              sx={{
                bgcolor: "#d4a0a2",
                "&:hover ": {
                  background: "#d4a0a2",
                },
              }}
              size="large"
              variant="contained"
              onClick={() => setOpen(!open)}
            >
              See your invoice
            </Button>
          </div>
        </div>

        <div className="success_img">
          <img src={Images.blob} alt="" />
          <img src={Images.bossCooking} alt="" />
        </div>
      </div>

      <CustomModal
        style={{
          boxShadow: "none",
          bgcolor: "transparent",
          padding: "1em 0",
        }}
        openModal={open}
        onClose={() => setOpen(!open)}
      >
        <Bill />
      </CustomModal>
    </>
  );
}
