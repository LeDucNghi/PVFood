import "./styles/Product.css";

import { addProduct, selectListCart, updateQty } from "features/cart/cartSlice";
import { selectFilterList, selectIsLoading } from "../productSlice";
import { useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";
import { Images } from "constants/images";
import List from "./List";
import Loading from "components/Common/Loading/Loading";
import Pagination from "components/Common/Pagination/Pagination";
import Swal from "sweetalert2";
import { handleFetchByFilter } from "../productThunk";
import { useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

function ProductList() {
  const dispatch = useDispatch();
  const productLists = useSelector(selectFilterList);
  const cartStorage = useSelector(selectListCart);

  const isLoading = useSelector(selectIsLoading);
  var [filterName, setFilterName] = useState("best seller");

  const handleAddToCart = async ({ item, isQuickView }) => {
    const existedItem = await cartStorage.find((x) => x.id === item.id);
    if (existedItem) {
      await dispatch(updateQty(item));
      if (!isQuickView) {
        await Swal.fire({
          icon: "success",
          title: "Add to cart successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      await dispatch(addProduct(item));
      if (!isQuickView) {
        await Swal.fire({
          icon: "success",
          title: "Add to cart successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="product_container">
      <Filter filterName={filterName} setFilterName={setFilterName} />

      {isLoading === true ? (
        <div className="waiting">
          <Loading />
        </div>
      ) : productLists && productLists.length !== 0 ? (
        <List addToCart={handleAddToCart} productLists={productLists} />
      ) : (
        <div className="waiting">
          <img src={Images.EMPTY_CART} alt="" />
        </div>
      )}
      <Pagination triggerFunc={handleFetchByFilter(filterName)} />
    </div>
  );
}

const Error = ({ error }) => {
  return <div>{error.message}</div>;
};

export default withErrorBoundary(ProductList, {
  FallbackComponent: Error,
});
