import "pages/Checkout/Checkout.css";

import BankingModal from "./BankingModal";
import { Field } from "formik";
import { paymentMethods } from "__mock__";
import { useState } from "react";

export function PaymentMethod() {
  const [deliverId, setDeliverId] = useState(-1);
  const [open, setOpen] = useState(false);

  const activeDeliver = (id) => {
    setDeliverId(id);
    if (id === 2 || id === 3) setOpen(true);
  };

  return (
    <div className="delivery_content">
      <div className="delivery_label_container">
        {paymentMethods.map((item, key) => {
          return (
            <label
              key={key}
              onClick={() => activeDeliver(item.id)}
              style={{
                background:
                  deliverId === item.id
                    ? "rgb(251, 241, 241)"
                    : "rgb(245, 245, 245)",
                transition: "background 0.5s ease-in-out",
              }}
            >
              <div className="deliver_text payment">
                <img src={item.image} alt="" />
                <h3>{item.paymentName} </h3>
                {/* <p>{item.paymentDescription} </p> */}
              </div>
              <Field
                type="radio"
                name="paymentMethods"
                // defaultChecked={checked}
                value={item.paymentName}
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>

      <BankingModal deliverId={deliverId} open={open} setOpen={setOpen} />
    </div>
  );
}
