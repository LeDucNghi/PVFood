import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { WavyLink } from "react-wavy-transitions";
import { handleCheckPrice } from "features/checkout/checkoutThunk";
import { selectListCart } from "../cartSlice";
import { selectShoppingInfo } from "features/checkout/checkoutSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Basket({ openSearch, setOpenSearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartStorage = useSelector(selectListCart);
  const shoppingInfo = useSelector(selectShoppingInfo);

  useEffect(() => {
    dispatch(handleCheckPrice());
  }, [dispatch, cartStorage]);

  const handleCloseTab = () => {
    setOpenSearch({ ...openSearch, isOpen: false });
    navigate(`/product`);
  };

  return (
    <div className="basket">
      <div className="basket_contain">
        <div className="basket_content">
          {/* subtotal */}
          <div className="row">
            <div className="col_2">Subtotal</div>
            <div className="col_1 text_right">
              {parseFloat(
                shoppingInfo ? shoppingInfo.subtotalPrice * 1000 : 0
              ).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND", // minimumFractionDigits: 3,
              })}
            </div>
          </div>

          {/* shipping */}
          <div className="row">
            <div className="col_2">Shipping</div>
            <div className="col_1 text_right">
              {parseFloat(
                shoppingInfo ? shoppingInfo.shipPrice * 1000 : 0
              ).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND", // minimumFractionDigits: 3,
              })}
            </div>
          </div>

          {/* total */}
          <div className="row total">
            <div className="col_2">Total</div>
            <div className="col_1 text_right">
              {parseFloat(
                shoppingInfo ? shoppingInfo.finalPrice * 1000 : 0
              ).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND", // minimumFractionDigits: 3,
              })}
            </div>
          </div>
        </div>

        {/* button */}
        <div className="bastket_btn">
          <Button
            onClick={handleCloseTab}
            className="button"
            variant="contained"
          >
            {/* Continue shopping */}
            {cartStorage && cartStorage.length === 0 ? (
              "Continue shopping"
            ) : (
              <WavyLink duration={1000} color="#f08080" to="/checkout">
                Checkout
              </WavyLink>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
