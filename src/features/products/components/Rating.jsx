import Rate from "./Rate";
import React from "react";

export function Rating() {
  return (
    <div className="rating">
      <h2>Reviews</h2>
      <div className="rating_details">
        <div className="rating_items">
          <h3>Cannabis</h3>
          <div className="ratings">
            {/* <img src={Images.RATING} alt="" /> */}
            <Rate />
            <p>Top</p>
          </div>
        </div>
        <div className="rating_items">
          <h3>Packaging</h3>
          <div className="ratings">
            {/* <img src={Images.RATING} alt="" /> */}
            <Rate />
            <p>Top</p>
          </div>
        </div>
        <div className="rating_items">
          <h3>Shipping</h3>
          <div className="ratings">
            {/* <img src={Images.RATING} alt="" /> */}
            <Rate />
            <p>Top</p>
          </div>
        </div>
        <div className="rating_items">
          <h3>Experience</h3>
          <div className="ratings">
            {/* <img src={Images.RATING} alt="" /> */}
            <Rate />
            <p>Top</p>
          </div>
        </div>
      </div>
    </div>
  );
}
