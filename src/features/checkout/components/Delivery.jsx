import "pages/Checkout/Checkout.css";

import { ErrorMessage, Field } from "formik";

import { deliveryMethods } from "__mock__";
import { useState } from "react";

export default function DeliveryMethods({ onChange, errors, touched }) {
  const [deliveryId, setDeliveryId] = useState("");

  const activeDeliver = (id) => {
    setDeliveryId(id);
  };
  return (
    <div className="delivery_content">
      <p>
        Orders placed after 10:00 and before 21:30 will be delivered the same
        day, the rest will be delivered the next day. Thank you!
      </p>

      <div className="delivery_label_container">
        {deliveryMethods.map((item, key) => {
          return (
            <label
              key={key}
              onClick={() => activeDeliver(item.id)}
              style={{
                background:
                  deliveryId === item.id
                    ? "rgb(251, 241, 241)"
                    : "rgb(245, 245, 245)",
                transition: "background 0.5s ease-in-out",
              }}
            >
              <div className="deliver_text">
                <img src={item.image} alt="" />
                <h3>{item.deliveryName} </h3>
              </div>

              <Field
                type="radio"
                name="deliveryName"
                value={item.deliveryName}
                // onChange={onChange}
              />
              <ErrorMessage name="deliveryName" />

              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
