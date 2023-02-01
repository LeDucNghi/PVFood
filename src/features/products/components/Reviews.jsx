import { useEffect, useState } from "react";

import { Divider } from "@mui/material";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import { selectProductReviews } from "../productSlice";
import { useSelector } from "react-redux";

export function Reviews({ id }) {
  const productReviews = useSelector(selectProductReviews);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    handleCalculateRating(productReviews ? productReviews : [], {
      setAverageRating,
    });
  }, [productReviews]);

  return (
    <div className="comments">
      <div className="global_rating">
        <h3>Global rating</h3>
        <div className="average">
          <span className="avg_number">
            {isNaN(averageRating) ? 0.0 : averageRating.toFixed(1)}{" "}
          </span>

          {/* <span className="line"></span> */}

          <Divider
            sx={{
              position: "relative",
              width: "150px",
              height: "1px",
              background: "#ffa102",
            }}
          />

          <span className="avg_total">
            {productReviews ? productReviews.length : 0} rating
          </span>
        </div>
      </div>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ height: "60%", mt: "6em" }}
      />

      <div className="comments_detail">
        {/* {productReviews && productReviews.length === 0 ? ( */}
        {!productReviews ? (
          <div>
            <Empty
              fontFamily="Krona One"
              width="100%"
              height="100%"
              margin="0 auto"
              title="There are currently no reviews yet"
              content="Be the first to review this product"
              image={Images.emptyCart}
              showButton={false}
            />
          </div>
        ) : (
          productReviews.map((item, key) => {
            return (
              <div key={key}>
                <div className="comments_item" key={key}>
                  <div className="comment_avt">
                    <img src={item.avatarUrl} alt={`${item.name} avatar`} />
                  </div>
                  <div className="comment_content">
                    <p className="quality_comment">{item.experience} </p>
                    <div className="comment_info">
                      <p className="cmt_time">
                        {/* {moment(item.createdAt).startOf().fromNow()}{" "} */}
                        {item.createdAt}
                      </p>{" "}
                      - <p className="cmt_username">{item.name} </p>-{" "}
                      <p className="order_status">{item.status} </p>
                    </div>
                    <div className="user_comment">
                      <p>{item.comment}</p>
                    </div>
                  </div>
                </div>
                <Divider sx={{ width: "80%", margin: "0 auto" }} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const handleCalculateRating = async (reviewList, { setAverageRating }) => {
  var oneStar = [];
  var twoStar = [];
  var threeStar = [];
  var fourStar = [];
  var fiveStar = [];

  if (reviewList.length !== 0) {
    await reviewList.forEach((element) => {
      if (element.rate === 1) {
        oneStar.unshift(element);
      } else if (element.rate === 2) {
        twoStar.unshift(element);
      } else if (element.rate === 3) {
        threeStar.unshift(element);
      } else if (element.rate === 4) {
        fourStar.unshift(element);
      } else if (element.rate === 5) {
        fiveStar.unshift(element);
      }
    });
  }

  const totalRating = await reviewList.length;
  const calculateAverage = await ((5 * fiveStar.length +
    4 * fourStar.length +
    3 * threeStar.length +
    2 * twoStar.length +
    1 * oneStar.length) /
    totalRating);

  await setAverageRating(calculateAverage);
};
