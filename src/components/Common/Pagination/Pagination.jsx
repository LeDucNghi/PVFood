import "./pagination.css";

import {
  selectParams,
  selectProductList,
  setParams,
} from "features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Pagination } from "@mui/material";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

function Indicator({ triggerFunc }) {
  const dispatch = useDispatch();

  const data = useSelector(selectProductList);
  const params = useSelector(selectParams);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!data) return;
    calculateTotalPages();
    setPage(params._page);
  }, [data, params]);

  const calculateTotalPages = () => {
    const totalRows = params && params._totalRows ? params._totalRows : 0;
    const limit = params ? params._limit : 0;
    const totalPage = Math.ceil(totalRows / limit);

    setTotalPages(totalPage);
  };

  const handlePageChange = (event, newPage) => {
    dispatch(
      setParams({
        ...params,
        _page: newPage,
      })
    );
    dispatch(triggerFunc);
  };

  return (
    <div className="pagination">
      <Pagination
        sx={{ margin: "0 43%" }}
        page={page}
        // count={pagination ? pagination : 0}
        count={totalPages}
        size="large"
        onChange={(event, newPage) => handlePageChange(event, newPage)}
      />
    </div>
  );
}

Indicator.propTypes = {
  triggerFunc: PropTypes.func,
};

// Indicator.defaultProps = {
//   title: "Product detail",
//   content: "Product detail",
// };

const Error = ({ error }) => {
  return <div>{error.message}</div>;
};

export default withErrorBoundary(Indicator, {
  FallbackComponent: Error,
});
