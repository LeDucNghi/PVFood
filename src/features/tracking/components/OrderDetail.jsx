import { Box, Button, Divider, Typography } from "@mui/material";

import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import Info from "./Info";
import ItemsList from "./ItemsList";
import Timelines from "./Timeline";
import TotalBill from "./TotalBill";

export default function OrderDetail({ orderDetail }) {
  if (!orderDetail)
    return (
      <Empty
        image={Images.emptyCart}
        width="100%"
        height="80%"
        margin="2em 0"
        showButton={false}
        title="Please choose any orders to see the detail"
      />
    );
  return (
    <Box className="order_detail_container">
      <Timelines orderDetail={orderDetail} />

      <Info orderDetail={orderDetail} />

      <Divider className="order_divider" variant="middle" />

      {/* items list */}
      <ItemsList orderDetail={orderDetail} />

      <Divider className="order_divider" variant="middle" />

      {/* total bill */}
      <TotalBill orderDetail={orderDetail} />

      <Divider className="order_divider" variant="middle" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography
          // variant="h4"
          sx={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 600,
            fontSize: "1.2em",
          }}
        >
          Note : <span>{orderDetail.info.userInfo.note} </span>
        </Typography>
        <Button
          disabled={
            orderDetail && orderDetail.status === "Shipping" ? false : true
          }
          //   onClick={() => dispatch(handleConfirmReceived(orderDetail.orderId))}
          variant="contained"
        >
          Received
        </Button>
      </Box>
    </Box>
  );
}
