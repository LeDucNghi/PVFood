import React from "react";
import { WavyLink } from "react-wavy-transitions";
import { selectListCart } from "features/users/cart/cartSlice";
import { useSelector } from "react-redux";

export default function BagsList() {
  const listCart = useSelector(selectListCart);
  return (
    <ul className="checkout_item">
      {listCart &&
        listCart.length !== 0 &&
        listCart.map((item, key) => {
          return (
            <li key={key}>
              {/* <WavyLink duration={1000} color="#f08080" to={`/product/${item.id}`}> */}
              <img className="cart_img" src={item.imageUrl} alt="img" />
              <div className="cart_info">
                <p className="cart_name">{item.name}</p>
                <p className="cart_price">
                  {" "}
                  <br />
                  {parseFloat(item.price * 1000).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}
                </p>
              </div>
              <div className="quantity">
                <span className="qty">Qty. {item.qty}</span>
              </div>
              {/* </WavyLink> */}
            </li>
          );
        })}
    </ul>
  );
}
