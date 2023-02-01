import "../components/styles/Cart.css";

import { Box, Typography } from "@mui/material";
import {
  decreaseQty,
  removeProduct,
  selectListCart,
  updateQty,
} from "../cartSlice";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Images } from "constants/images";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

export default function CartList({ openSearch, setOpenSearch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartStorage = useSelector(selectListCart);

  const handleRedirect = (id) => {
    setOpenSearch({ ...openSearch, isOpen: false });
    navigate(`/product/${id}`);
  };

  return (
    <>
      {cartStorage && cartStorage.length === 0 && (
        <div className="empty_cart">
          <img src={Images.emptyCart} alt="empty_cart" />
          <h2>Your Shopping Bag is empty.</h2>
        </div>
      )}

      {cartStorage && cartStorage.length !== 0 && (
        <Box className="cart_list">
          <List
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                sx={{ fontSize: "14px" }}
                component="div"
                id="nested-list-subheader"
              >
                Your cart
              </ListSubheader>
            }
            dense={false}
          >
            {cartStorage.map((item, key) => {
              return (
                <ListItem
                  sx={{ width: "100%" }}
                  key={key}
                  secondaryAction={
                    <IconButton
                      onClick={() => dispatch(removeProduct(item))}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleRedirect(item.id)}
                  >
                    <Avatar src={item.imageUrl} />
                  </ListItemAvatar>

                  <ListItemText
                    className="cart_text"
                    primary={item.name}
                    secondary={parseFloat(item.price * 1000).toLocaleString(
                      "it-IT",
                      {
                        style: "currency",
                        currency: "VND", // minimumFractionDigits: 3,
                      }
                    )}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      onClick={() => dispatch(decreaseQty(item))}
                      aria-label="delete"
                      color="default"
                      disabled={item.qty === 1}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography sx={{ fontSize: "1em" }}>{item.qty}</Typography>

                    <IconButton
                      onClick={() => dispatch(updateQty(item))}
                      aria-label="delete"
                      color="default"
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}
