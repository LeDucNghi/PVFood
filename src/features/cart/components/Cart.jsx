import "../components/styles/Cart.css";

import Basket from "./Basket";
import CartList from "./CartList";

function Cart({ openSearch, setOpenSearch }) {
  return (
    <div className="cart_container">
      <CartList openSearch={openSearch} setOpenSearch={setOpenSearch} />

      <Basket openSearch={openSearch} setOpenSearch={setOpenSearch} />
    </div>
  );
}

export default Cart;
