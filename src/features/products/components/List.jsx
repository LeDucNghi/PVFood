import "./styles/Product.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import QuickView from "./QuickView";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export default function List({ addToCart, productLists }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(null);

  const showQuickView = (item) => {
    setOpen(!open);

    setItems(item);
  };

  return (
    <>
      <ul className="product_list">
        {productLists
          ? productLists.map((item, key) => {
              return (
                <li key={key} className="product_item">
                  <span className="content">
                    <img className="img" src={item.imageUrl} alt="abc" />
                    <span className="content-name">{item.name} </span> <br />
                    <span className="content-price">
                      {parseFloat(item.price * 1000).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>{" "}
                    <br />
                    <div className="content_button">
                      <Tooltip
                        onClick={() => addToCart(item)}
                        arrow
                        title="Add to cart"
                      >
                        <IconButton size="large">
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        arrow
                        onClick={() => showQuickView(item)}
                        title="Quick view"
                      >
                        <IconButton size="large">
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </span>
                </li>
              );
            })
          : []}
      </ul>

      <QuickView
        addToCart={addToCart}
        open={open}
        setOpen={setOpen}
        items={items}
      />
    </>
  );
}
