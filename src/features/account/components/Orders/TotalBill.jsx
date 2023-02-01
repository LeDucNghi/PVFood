import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  fontFamily: "Public Sans",
  fontWeight: 600,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  // color: theme.palette.text.secondary,
}));

export default function TotalBill({ orderDetail }) {
  const totalPrice = orderDetail ? orderDetail.info.shoppingInfo.finalPrice : 0;
  const subtotalPrice = orderDetail
    ? orderDetail.info.shoppingInfo.subtotalPrice
    : 0;

  const promoPercent = orderDetail
    ? orderDetail.info.shoppingInfo.promoCodes.ticketPercent
    : 0;

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Item elevation={0}>
          <Typography>Subtotal: </Typography>
          <Typography sx={{ width: "20%", textAlign: "end" }}>
            {parseFloat(subtotalPrice * 1000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </Typography>
        </Item>

        <Item elevation={0}>
          <Typography>Discount: </Typography>
          <Typography sx={{ width: "20%", textAlign: "end" }}>
            {promoPercent}%
          </Typography>
        </Item>

        <Item elevation={0}>
          <Typography>Total: </Typography>
          <Typography sx={{ width: "20%", textAlign: "end" }}>
            {parseFloat(totalPrice * 1000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </Typography>
        </Item>
      </Grid>
    </Box>
  );
}
