import { addProduct, selectListCart, updateQty } from "features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { Images } from "constants/images";
import Swal from "sweetalert2";
import { selectProductDetail } from "../productSlice";

export function ProductInfo() {
  const dispatch = useDispatch();
  const productItems = useSelector(selectProductDetail);
  const cartStorage = useSelector(selectListCart);

  const handleAddToCart = (item) => {
    const existedItem = cartStorage.find((x) => x.id === item.id);
    if (existedItem) {
      dispatch(updateQty(item));
      Swal.fire({
        icon: "success",
        title: "Add to cart successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Add to cart successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addProduct(item));
    }
  };

  if (!productItems)
    return (
      <div>
        <img src={Images.EMPTY_CART} alt="" />
        <p>Oops!!Not found ur products...</p>
      </div>
    );
  return (
    <div className="product">
      <div className="product_info">
        <div className="hs">
          <div className="product_name">{productItems.name}</div>
          <div className="product_price">
            {parseFloat(productItems.price * 1000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}
          </div>
        </div>
        <div className="description">{productItems.description}</div>
        <div className="product_interact">
          <div className="addToCart">
            <Button
              variant="contained"
              onClick={() => handleAddToCart(productItems)}
            >
              Add to Shopping Bag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
