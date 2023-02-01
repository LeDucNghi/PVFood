import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CustomModal from "components/Common/Modal/Modal";
import { selectProductDetail } from "../productSlice";
import { useSelector } from "react-redux";

export default function TagList() {
  const productDetail = useSelector(selectProductDetail);
  const [open, setOpen] = useState(false);
  const [tagItem, setTagItem] = useState(null);

  const showTagItems = (item) => {
    setOpen(!open);
    setTagItem(item);
  };

  return (
    <>
      <div className="product_tag">
        <h2>Often bought together</h2>

        <List
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          {productDetail &&
            productDetail.productTags &&
            productDetail.productTags.length !== 0 &&
            productDetail.productTags.map((item, key) => {
              // console.log(
              //   "🚀 ~ file: TagList.jsx:93 ~ TagList ~ productDetail.productTags",
              //   productDetail.productTags
              // );

              return (
                <ListItem
                  sx={{ borderRadius: "15px" }}
                  key={key}
                  alignItems="flex-start"
                  onClick={() => showTagItems(item)}
                >
                  <ListItemButton>
                    <ListItemAvatar
                      sx={{ width: "210px", height: "210px", mr: "16px" }}
                    >
                      <Avatar
                        sx={{ width: "210px", height: "210px" }}
                        alt="Remy Sharp"
                        src={item.imageUrl}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            className="tag_name"
                            component="span"
                            variant="h3"
                            color="text.primary"
                          >
                            {item.name}
                          </Typography>{" "}
                          {/* {" — I'll be in your neighborhood doing errands this…"} */}
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="h3"
                            color="text.primary"
                            className="tag_description"
                          >
                            {item.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </div>

      <CustomModal
        style={{
          width: "800px",
          height: "465px",
        }}
        openModal={open}
        onClose={() => setOpen(!open)}
      >
        {tagItem && (
          <div className="tag_items_modal_container">
            <div className="left_side">
              <img src={tagItem.imageUrl} alt="img" />

              <Button className="button" fullWidth variant="contained">
                Detail
              </Button>
            </div>

            <div className="right_side">
              <h3>{tagItem.name} </h3>
              <h3>
                {parseFloat(tagItem.price * 1000).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </h3>
              <p>{tagItem.description}</p>

              <Button variant="contained" className="button">
                Add to cart
              </Button>
            </div>
          </div>
        )}
      </CustomModal>
    </>
  );
}
