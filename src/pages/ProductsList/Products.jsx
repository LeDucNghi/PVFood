import "./Products.css";

import Banner from "features/products/components/ProductBanner";
import { Outlet } from "react-router-dom";
import ScrollToTop from "components/Common/ScrollToTop/ScrollToTop";

function Products() {
  return (
    <div>
      <ScrollToTop />

      <Banner />

      {/* <Breadcrumb /> */}

      <div className="filter">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
