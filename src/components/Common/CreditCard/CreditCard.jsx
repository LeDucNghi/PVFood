import "./CreditCard.css";

import { Images } from "constants/images";
import PropTypes from "prop-types";
import React from "react";

export default function CreditCard({ bankName, bankNumber, bankHost }) {
  return (
    <div className="card">
      <div className="card_bg">
        <img src={Images.bankingBG} alt="" />
      </div>

      <div className="card_content">
        <h4 className="debit_card">Debit Card</h4>
        <h4 className="bank">
          {bankName} <span>BANK</span>
        </h4>
        <div className="chip">
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
          <h6> </h6>
        </div>
        <div className="number">
          {/* <h6>4512</h6>
        <h6>8963</h6>
        <h6>7845</h6>
        <h6>3542</h6> */}
          <h6>{bankNumber} </h6>
        </div>
        <img src={Images.wave} alt="" className="wave" />
        {/* <div className="ex_date">
        <span>
          VALID
          <br />
          UPTO
        </span>
        <h3>
          02 <span>/</span> 28
        </h3>
      </div> */}
        <h2 className="name">{bankHost} </h2>
        {/* <div className="cvv">
        <span>CVV</span>
        <h5>563</h5>
      </div> */}
        <img src={Images.visa} alt="" className="visa" />
      </div>
    </div>
  );
}

CreditCard.propTypes = {
  bankName: PropTypes.string.isRequired,
  bankNumber: PropTypes.string.isRequired,
  bankHost: PropTypes.string,
};

CreditCard.defaultProps = {
  bankName: "KDS",
  bankNumber: "4512 8963 7845 3542",
  bankHost: "LE NGUYEN KIM VY",
};
