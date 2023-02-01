import { Images } from "constants/images";
import React from "react";
import { WavyLink } from "react-wavy-transitions";

export default function BannerRight({ selectedItems, newProductList }) {
  return (
    <div className="banner_right">
      <div className="banner_contain-content">
        <div className="content_text">
          <p>
            ❤{" "}
            {!selectedItems
              ? newProductList[0].description
              : selectedItems.description}
          </p>
          <div className="content_btn">
            <hr />{" "}
            <WavyLink
              color="#f08080"
              to={`/product/${
                !selectedItems ? newProductList[0].id : selectedItems.id
              }`}
            >
              Learn more
            </WavyLink>
          </div>

          <img src={Images.connetHand} alt="" />
        </div>
        <div className="drop-shadow"></div>
      </div>
    </div>
  );
}
