import "./Connect.css";

import { Images } from "constants/images";

Connect.propTypes = {};

function Connect(props) {
  return (
    <div className="connect">
      <div className="connect_contain">
        <h2>Connect to us</h2>

        <div className="connect_social">
          <ul className="sci">
            <li>
              <a
                className="icon facebook"
                href="https://www.facebook.com/pvfood.gv"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="icon instagram"
                href="https://www.instagram.com/pvfood_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="icon github"
                href="https://github.com/LeDucNghi"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="icon shopee"
                href="https://shopee.vn/shop/17168297?utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_17096330016&utm_term=8odiau58tb1i"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Images.shopee} alt="SHOPEE" />
              </a>
            </li>
          </ul>
        </div>
        <div className="connect_img">
          <img src={Images.connect} alt="" />
        </div>
        <div className="connect_img-hand">
          <img src={Images.hand} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
