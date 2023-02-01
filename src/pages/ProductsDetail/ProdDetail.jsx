import "./ProdDetail.css";

import {
  fetchProductById,
  handleFetchComment,
} from "features/users/products/productThunk";
import { useDispatch, useSelector } from "react-redux";

import Comment from "features/users/products/components/Comment";
import { ImageList } from "features/users/products/components/ImageList";
import Loading from "components/Common/Loading/Loading";
import { ProductInfo } from "features/users/products/components/ProductInfo";
import { Reviews } from "features/users/products/components/Reviews";
import TagList from "features/users/products/components/TagList";
import { selectIsLoading } from "features/users/products/productSlice";
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
