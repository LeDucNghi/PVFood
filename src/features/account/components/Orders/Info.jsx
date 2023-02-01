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
  color: theme.palette.text.secondary,
}));

export default function Info({ orderStatus, status, orderDetail }) {
  const checkOrderDetail = orderDetail && orderDetail.info;
  const checkCancelStatus = status && status === "Cancelled";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Item className="order_detail_items">
            <Typography className="title">FROM</Typography>

            <Typography className="name">LE NGUYEN KIM VY</Typography>
            <Typography className="address">
              Đường số 1, phường 16, quận Gò Vấp, TPHCM
            </Typography>
            <Typography className="phone">Phone: 0338006534</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item className="order_detail_items">
            <Typography className="title">TO</Typography>

            <Typography className="name">
              {checkOrderDetail ? orderDetail.info.userInfo.fullName : ""}{" "}
            </Typography>
            <Typography className="address">
              {checkOrderDetail ? orderDetail.info.userInfo.address : ""}
            </Typography>
            <Typography className="phone">
              Phone: {checkOrderDetail ? orderDetail.info.userInfo.phone : ""}
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={6} md={6}>
          <Item className="order_detail_items">
            <Typography className="title">CREATE DATE</Typography>

            <Typography className="name">
              {checkOrderDetail ? orderDetail.createDate : ""}{" "}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item className="order_detail_items">
            <Typography className="title">
              {(orderStatus && orderStatus.status === "Cancelled") ||
              (orderDetail && orderDetail.status === "Cancelled")
                ? "CANCELLED DATE"
                : "RECEIVED DATE"}{" "}
            </Typography>

            <Typography className="name">
              {" "}
              {orderStatus
                ? orderStatus.time
                : orderDetail && orderDetail.cancelledDate
                ? orderDetail.cancelledDate
                : orderDetail && orderDetail.receivedDate
                ? orderDetail.receivedDate
                : "Have not received"}{" "}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
