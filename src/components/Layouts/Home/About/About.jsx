import "./About.css";

import { Images } from "constants/images";
import React from "react";

function About(props) {
  return (
    <div className="about">
      <div className="img_review">
        <img src={Images.review} alt="" />
      </div>

      <div className="about_rectang">
        <div className="track">
          <div className="circle">
            <div className="point"></div>
          </div>
        </div>
      </div>

      <div className="about_info">
        <div className="info_content">
          <h2>PV Food</h2>

          <p>
            Established since 2015, PV Food can only be reached by boat, and
            hasn’t changed much since ancient times..Food has brought a new
            genius and revolution in our daily life. Standing at rank 3 in both
            Asia and the world, number one in Taiwan, PVFood has potential to
            rank 1 in the world. It has become the most national industry and
            enterprise that we have to rely on to solve the food crisis.
          </p>
        </div>
        {/* <div className="drop-shadow"></div> */}
      </div>
    </div>
  );
}

export default About;
