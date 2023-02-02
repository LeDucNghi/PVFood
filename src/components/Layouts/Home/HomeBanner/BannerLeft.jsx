import "./Banner.css";

import React from "react";

export default function BannerLeft({
  newProductList,
  handleSelectItems,
  selectedItems,
}) {
  return (
    <div className="banner_left">
      <div className="banner_note">
        <p className="note">This is a great snack to sip</p>
        <p className="note"> and also a convenient drink</p>
      </div>

      <div className="banner_thumb">
        <ul className="thumb">
          {newProductList.map((items, key) => {
            return (
              <li
                key={key}
                onClick={() => handleSelectItems(items)}
                //  to={`/product/${items.mainId}`}
              >
                <button className="feedback_btn">
                  <span
                    className={
                      selectedItems && selectedItems.id === items.id
                        ? `circlee selected`
                        : items.id === 42 && !selectedItems
                        ? `circlee selected`
                        : `circlee`
                    }
                    aria-hidden="true"
                  >
                    <span className="icon arrow"></span>
                  </span>
                  <span
                    className={
                      selectedItems && selectedItems.id === items.id
                        ? `button-text selectedText`
                        : items.id === 1 && !selectedItems
                        ? `button-text selectedText`
                        : `button-text`
                    }
                  >
                    {items.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="banner_warning">
        <p className="warning_time">24</p>

        <p className="warning_hrs">hrs</p>

        <p className="warning_text">
          STORAGE DRY, COOL, AVOID DIRECT SUNSHIP, CLOSED AFTER OPENING.
        </p>
      </div>
    </div>
  );
}
