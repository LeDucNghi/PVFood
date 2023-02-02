import "./BestSeller.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Images } from "constants/images";

function BestSeller(props) {
  return (
    <div className="best-seller">
      <div className="sell_content">
        <h2>
          Just your <br /> custom <br /> prescription
        </h2>

        <p>
          A journey into CBD Cannabis, our Worlds created to accompany you in
          the discovery of a plant with properties handed down over millennia.
        </p>

        <h4>$50.000</h4>

        <div className="content_icon">
          <AddShoppingCartIcon fontSize="large" />
        </div>
      </div>
      <div className="sell_img">
        <img src={Images.product2Img} alt="" />
      </div>
      <div className="sell_rectang"></div>
    </div>
  );
}

export default BestSeller;
