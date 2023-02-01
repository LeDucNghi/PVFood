import "pages/Checkout/Checkout.css";

import { postNote, selectShoppingInfo } from "../checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import BagsList from "./BagsList";
import CheckoutCode from "./CheckoutCode";
import { CheckoutPrice } from "./CheckoutPrice";
import PromoCode from "./PromoCode";
import { TextField } from "@mui/material";

export default function ShoppingBags({ value }) {
  const dispatch = useDispatch();
  const shoppingInfo = useSelector(selectShoppingInfo);
  const typingRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (typingRef.current) clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => {
      dispatch(postNote(note));
    }, 500);
  }, [note, dispatch]);

  return (
    <div className="checkout_bag">
      <h2>Your Shopping Bag</h2>

      <BagsList />

      <CheckoutPrice value={value} />

      {value === "3" || value === "2" ? null : (
        <CheckoutCode value={value} setOpen={setOpen} open={open} />
      )}

      <div className="checkout_cost-totalPrice">
        <div className="row total">
          <div className="col_2">Total</div>
          <div className="col_1">
            {parseFloat(
              shoppingInfo ? shoppingInfo.finalPrice * 1000 : 0
            ).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </div>
        </div>
      </div>

      {value === "3" || value === "2" ? null : (
        <div className="checkout_note">
          <TextField
            type="text"
            onChange={(e) => setNote(e.target.value)}
            id="outlined-basic"
            label="Ghi chú"
            variant="outlined"
            fullWidth
          />
        </div>
      )}

      <PromoCode open={open} setOpen={setOpen} />
    </div>
  );
}
