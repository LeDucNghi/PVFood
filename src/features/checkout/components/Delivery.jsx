import "pages/Checkout/Checkout.css";

import { Field } from "formik";
import { deliveryMethods } from "__mock__";
import { useState } from "react";

export default function DeliveryMethods() {
  const [deliveryId, setDeliveryId] = useState("");

  const activeDeliver = (id) => {
    setDeliveryId(id);
  };
  return (
    <div className="delivery_content">
      <p>
        Đơn hàng đặt sau 10h và trước 21h30 sẽ được giao trong ngày, còn lại sẽ
        được giao vào ngày hôm sau. Xin cảm ơn!
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
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
