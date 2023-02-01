import React, { useEffect } from "react";
import { selectPromoCodes, selectShoppingInfo } from "../checkoutSlice";
import { useDispatch, useSelector } from "react-redux";

import { handleCheckPrice } from "../checkoutThunk";

export function CheckoutPrice({ value }) {
  const dispatch = useDispatch();
  const shoppingInfo = useSelector(selectShoppingInfo);
  const promoCodes = useSelector(selectPromoCodes);

  useEffect(() => {
    dispatch(handleCheckPrice());
  }, [dispatch, promoCodes]);

  return (
    <div className="checkout_price">
      <div className="row">
        <div className="col_2">Subtotal</div>
        <div className="col_1">
          {parseFloat(
            shoppingInfo ? shoppingInfo.subtotalPrice * 1000 : 0
          ).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND", // minimumFractionDigits: 3,
          })}{" "}
        </div>
      </div>
      <div className="row">
        <div className="col_2">Shipping</div>
        <div className="col_1">
          {parseFloat(
            shoppingInfo ? shoppingInfo.shipPrice * 1000 : 0
          ).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND", // minimumFractionDigits: 3,
          })}{" "}
        </div>
      </div>
      {value === "3" || value === "2" ? (
        <div className="row">
          <div className="col_2">Promo Code</div>
          <div className="col_1">
            {shoppingInfo && shoppingInfo.promoCodes
              ? `${shoppingInfo.promoCodes.ticketPercent}%`
              : "0%"}
          </div>
        </div>
      ) : null}
    </div>
  );
}
