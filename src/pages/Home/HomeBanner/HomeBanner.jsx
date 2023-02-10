import "./Banner.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import BannerLeft from "./BannerLeft";
import BannerMiddle from "./BannerMiddle";
import BannerRight from "./BannerRight";
import Loading from "components/Common/Loading/Loading";
import { fetchNewProductList } from "features/products/productThunk";
import { selectNewProductList } from "features/products/productSlice";

function Banner(props) {
  const dispatch = useDispatch();
  const newProductList = useSelector(selectNewProductList);

  var [imgItems, setImgItems] = useState(null);
  var [selectedItems, setSelectedItems] = useState(null);

  useEffect(() => {
    dispatch(fetchNewProductList());
  }, [dispatch]);

  const handleSelectItems = (items) => {
    imgItems = items.imageUrl;
    setImgItems(imgItems);
    setSelectedItems(items);
  };

  if (newProductList && newProductList.length === 0)
    return <Loading height="100vh" />;
  else
    return (
      <div className="banner_container">
        {/* left */}
        <BannerLeft
          newProductList={newProductList}
          handleSelectItems={handleSelectItems}
          selectedItems={selectedItems}
        />

        {/* middle */}
        <BannerMiddle
          imgItems={imgItems}
          newProductList={newProductList}
          selectedItems={selectedItems}
        />

        {/* right */}
        <BannerRight
          selectedItems={selectedItems}
          newProductList={newProductList}
        />
      </div>
    );
}

export default Banner;
