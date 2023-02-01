import React from "react";
import { handleAddToCart } from "features/products/productThunk";
import { useDispatch } from "react-redux";

export default function BannerMiddle({
  imgItems,
  newProductList,
  selectedItems,
}) {
  const dispatch = useDispatch();
  return (
    <div className="banner_contain-circle">
      <div className="banner_circle-middle">
        <div className="circle_star small_circle">
          <button>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </button>
        </div>
        <div
          className="circle_plus small_circle"
          onClick={() =>
            dispatch(
              handleAddToCart(selectedItems ? selectedItems : newProductList[0])
            )
          }
        >
          <button>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <div className="banner_circle-item">
          <img src={imgItems ? imgItems : newProductList[0].imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
