import { selectProductDetail } from "../productSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export function ImageList() {
  const productDetail = useSelector(selectProductDetail);

  var [imageItems, setImageItems] = useState(null);

  const handleChangeImg = (item) => {
    imageItems = item.imageUrl;
    setImageItems(imageItems);
  };

  return (
    <div className="img_detail">
      <ul className="img_item_container">
        {productDetail && productDetail.length !== 0
          ? productDetail.imageTags.map((item, key) => {
              return (
                <li
                  onClick={() => handleChangeImg(item)}
                  className="img_item"
                  key={key}
                >
                  <img src={item.imageUrl} alt="" />
                </li>
              );
            })
          : []}
      </ul>
      <div className="img_show">
        <img
          src={
            imageItems
              ? imageItems
              : productDetail && productDetail.imageTags
              ? productDetail.imageTags[0].imageUrl
              : null
          }
          alt=""
        />
      </div>
    </div>
  );
}
