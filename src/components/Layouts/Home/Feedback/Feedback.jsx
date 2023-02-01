import "./Feedback.css";

import React, { useState } from "react";

import CustomModal from "components/Common/Modal/Modal";
import { Images } from "constants/images";

function Feedback(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="feedback">
      <div className="feedback_rectang"></div>

      <div className="feedback_img">
        <img src={Images.feedbackImg} alt="feedback" />
      </div>

      <div className="feedback_content">
        <div className="title">
          <p>Feedback</p>
        </div>
        <h2>Some Feedback from customers</h2>
        <div className="c-btn">
          <button className="feedback_btn">
            <span className="circlee" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text" onClick={() => setOpen(!open)}>
              See all feedback
            </span>
          </button>
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

export default Feedback;
