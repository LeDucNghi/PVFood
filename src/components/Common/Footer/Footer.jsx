import "./Footer.css";

import { Images } from "constants/images";
import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  if (pathname === `/login` || pathname === `/register`) return <></>;
  if (pathname === `/admin`) return <></>;
  if (pathname === `/success`) return <></>;
  if (pathname === `/dashboard/app`) return <></>;
  if (pathname === `/dashboard/user`) return <></>;
  if (pathname === `/dashboard/orders`) return <></>;
  if (pathname === `/dashboard/products`) return <></>;
  if (pathname === `/user/profile`) return <></>;
  if (pathname === `/user/orders`) return <></>;
  if (pathname === `/user/address`) return <></>;
  if (pathname === `/user/password`) return <></>;

  return (
    <footer>
      <div className="footer_logo">
        <img src={Images.logo} alt="" />
      </div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_content-head">
            <a href="true" className="head-title">
              ABOUT US
            </a>
            <a href="true" className="head-title event">
              EVENTS
            </a>
            <a href="true" className="head-title consult">
              CONSULTATIONS
            </a>
            <a href="true" className="head-title ourjoy">
              OUR JOY FAMILY
            </a>
            <a href="true" className="head-title faq">
              FAQ
            </a>
          </div>
          <div className="footer_content-contact">
            <div className="info contact">
              <h2>CONTACT</h2>
              <p>0338006534 | 0931303515</p>
              <p>govapanvat@gmail.com</p>
              <p>Đường số 1, phường 16, Quận Gò Vấp, TP HCM</p>
            </div>
            <div className="info hour">
              <h2>HOURS</h2>
              <p>
                <b>* by appoiment only</b>{" "}
              </p>
              <p>Tues, Thurs, & Fri | 11AM-21PM</p>
              <p>Web & Sat | 11AM-7AM</p>
            </div>
            <div className="info information">
              <h2>INFORMATION</h2>
              <p>Contact us</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="footer_content-connect">
            <div className="content_connect">
              <h2>Let's connect</h2>
              <div className="connect_icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
            <div className="content_feedback">
              <h2>LET'S WE KNOW IF YOU'RE ENJOY :</h2>
              <label htmlFor="">
                <input type="text" />

                <span>
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
