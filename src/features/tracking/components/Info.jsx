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

export default function Info({ orderDetail }) {
  const checkOrderDetail = orderDetail && orderDetail.info;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Item className="order_detail_items">
            <Typography className="title">FROM</Typography>

            <Typography className="name">LE NGUYEN KIM VY</Typography>
            <Typography className="address">
              134/34/11 đường số 1, phường 16, quận Gò Vấp, TPHCM
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
            <Typography className="title">RECEIVE DATE</Typography>

            <Typography className="name">
              {" "}
              {orderDetail && orderDetail.receivedDate
                ? orderDetail.receivedDate
                : "Undefine"}{" "}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
