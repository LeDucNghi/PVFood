import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { selectListCart } from "features/users/cart/cartSlice";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "none",
  margin: "1em 0",
  padding: theme.spacing(1),
  textAlign: "left",
  fontFamily: "Public Sans",
  color: theme.palette.text.secondary,

  width: "100%",
  display: "flex",
  // justifyContent: "flex-start",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function ItemsList({ orderDetail }) {
  const listCart = useSelector(selectListCart);

  const orderList =
    orderDetail && orderDetail.info ? orderDetail.info.shoppingInfo.items : [];

  return (
    <Box sx={{ mt: "2em", height: "200px", overflow: "auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {orderList.map((items, key) => {
          return (
            <Item key={key} elevation={0}>
              <Avatar
                sx={{ width: "50px", height: "50px" }}
                alt={`${items.name} image`}
                src={items.imageUrl}
              />
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  // margin: "0 2em",
                  // bgcolor: "violet",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{items.name} </Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {" "}
                  {parseFloat(items.price * 1000).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}{" "}
                </Typography>
              </Box>
              <Typography sx={{ fontWeight: 600 }}>
                Qty. {items.qty}{" "}
              </Typography>
              <Typography
                sx={{ width: "20%", textAlign: "left", fontWeight: 600 }}
              >
                Total.{" "}
                {parseFloat(items.price * items.qty * 1000).toLocaleString(
                  "it-IT",
                  {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  }
                )}{" "}
              </Typography>
            </Item>
          );
        })}
      </Grid>
    </Box>
  );
}
