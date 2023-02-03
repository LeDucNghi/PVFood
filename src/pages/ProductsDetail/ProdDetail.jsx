import "./ProdDetail.css";

import {
  fetchProductById,
  handleFetchComment,
} from "features/products/productThunk";
import { useDispatch, useSelector } from "react-redux";

import Comment from "features/products/components/Comment";
import { ImageList } from "features/products/components/ImageList";
import Loading from "components/Common/Loading/Loading";
import { ProductInfo } from "features/products/components/ProductInfo";
import { Reviews } from "features/products/components/Reviews";
import { selectIsLoading } from "features/products/productSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProdDetail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(handleFetchComment(id));
  }, [id, dispatch]);

  if (isLoading === true) return <Loading height="100vh" />;
  return (
    <div>
      <div className="detail_container">
        <ImageList />

        <ProductInfo />
      </div>

      <div className="reviews">
        {/* <Rating /> */}

        <Reviews id={id} />

        <Comment id={id} />
      </div>

      {/* <TagList /> */}
    </div>
  );
}

export default ProdDetail;
