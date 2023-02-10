import "./Collection.css";

import CustomModal from "components/Common/Modal/Modal";
import { Images } from "constants/images";
import { WavyLink } from "react-wavy-transitions";
import { useState } from "react";

function Collection(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collection">
      <div className="collection_content">
        <div className="content">
          <h2>Collection</h2>
          <p>
            A journey into CBD Cannabis, our Worlds created to accompany you in
            the discovery of a plant with properties handed down over millennia.
          </p>
        </div>
        <div className="drop-shadow"></div>
      </div>

      <div className="food_collection">
        <div className="text">
          <p className="title">Collection</p>
          <WavyLink
            duration={1000}
            color="#f08080"
            to="/product/"
            // className="col_text"
          >
            Food
          </WavyLink>
        </div>

        <div className="rectang"></div>
        <div className="food_img">
          <img src={Images.cerealsImg} alt="" />
        </div>
      </div>

      <div className="cloth_collection">
        <div className="cloth_img">
          <img src={Images.cloth} alt="" />
        </div>
        <div className="text closer">
          <p className="title">Collection</p>
          <p onClick={() => setOpen(true)} className="col_text">
            Clothing
          </p>
        </div>
      </div>

      <div className="decor_collection">
        <div className="decor_img">
          <img src={Images.decor} alt="" />
        </div>
        <div className="text closer">
          <p className="title">Collection</p>
          <p onClick={() => setOpen(true)} className="col_text">
            Decor
          </p>
        </div>
      </div>

      <CustomModal
        style={{
          boxShadow: "none",
          bgcolor: "transparent",
        }}
        openModal={open}
        onClose={() => setOpen(!open)}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            margin: "0 auto",
            borderRadius: "15px",
            objectFit: "cover",
          }}
          src={Images.comingSoon}
          alt=""
        />
      </CustomModal>
    </div>
  );
}

export default Collection;
