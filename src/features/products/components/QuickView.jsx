import { Button } from "@mui/material";
import CustomModal from "components/Common/Modal/Modal";
import Notification from "components/Common/Notification/Notification";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function QuickView({
  addToCart,
  openModal,
  setOpenModal,
  items,
}) {
  const navigate = useNavigate();

  var [imageItems, setImageItems] = useState(null);
  // const [openNotify, setOpenNotify] = useState(false);
  const [notify, setNotify] = useState({
    open: false,
    message: "",
    severity: "success",
    vertical: "",
    horizontal: "",
    autoHideDuration: 0,
  });

  const handleChangeImg = (item) => {
    imageItems = item.imageUrl;
    setImageItems(imageItems);
  };

  const handleCloseQuickView = () => {
    navigate(`/product/${items.id}`);
    setOpenModal(!openModal);
  };

  const handleAddToCart = (item) => {
    addToCart({ item, isQuickView: true });

    setNotify({
      open: true,
      message: "Add to cart successfully!!",
      severity: "success",
      vertical: "bottom",
      horizontal: "right",
      autoHideDuration: 1000,
    });
  };

  return (
    <CustomModal
      style={{
        width: "800px",
        height: "465px",
      }}
      openModal={openModal}
      onClose={() => setOpenModal(!openModal)}
    >
      {items && (
        <div className="tag_items_modal_container">
          <div className="left_side">
            <img src={imageItems ? imageItems : items.imageUrl} alt="img" />

            <Button
              onClick={handleCloseQuickView}
              className="button"
              variant="contained"
            >
              Detail
            </Button>
          </div>

          <div className="right_side">
            <h3>{items.name}</h3>
            <h3>
              {parseFloat(items.price * 1000).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </h3>
            <p>{items.description}</p>

            {items.imageTags.length !== 0 && (
              <ul className="quickview_image_tag">
                {items.imageTags.map((item, key) => {
                  return (
                    <li
                      onClick={() => handleChangeImg(item)}
                      className={
                        imageItems === item.imageUrl
                          ? "quickview_image_item is_chosen"
                          : "quickview_image_item"
                      }
                      key={key}
                    >
                      <img src={item.imageUrl} alt="" />
                    </li>
                  );
                })}
              </ul>
            )}

            <Button
              onClick={() => handleAddToCart(items)}
              variant="contained"
              className="button"
            >
              Add to cart
            </Button>
          </div>

          <Notification notify={notify} setNotify={setNotify} />
        </div>
      )}
    </CustomModal>
  );
}
