import { Button, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import Info from "./Info";
import ItemsList from "./ItemsList";
import Loading from "components/Common/Loading/Loading";
import Timelines from "features/users/tracking/components/Timeline";
import TotalBill from "./TotalBill";
import { handleConfirmReceived } from "../../accountThunk";
import moment from "moment";
import { selectStatus } from "../../accountSlice";

export default function OrderDetail({
  isFetching,
  orderDetail,
  orderStatus,
  setOrderStatus,
}) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const handleSetNewStatus = async (id, status) => {
    await dispatch(handleConfirmReceived(id, status));
    await setOrderStatus({
      status,
      time: moment(new Date()).format("LLLL"),
    });
  };

  if (isFetching) return <Loading />;

  if (!orderDetail)
    return (
      <Empty
        width="100%"
        showButton={false}
        title="Please choose any orders to see the detail"
        image={Images.emptyCart}
        margin="15em 0"
      />
    );

  return (
    <>
      <Timelines orderStatus={orderStatus} orderDetail={orderDetail} />
      {/* info */}
      <Info
        orderStatus={orderStatus}
        status={status}
        orderDetail={orderDetail}
      />

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

        <Box
          sx={{
            width: "30%",

            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            disabled={
              (orderDetail && orderDetail.status === "Cancelled") ||
              (orderStatus && orderStatus.status === "Cancelled")
                ? true
                : false
            }
            onClick={() => handleSetNewStatus(orderDetail.orderId, "Cancelled")}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>

          <Button
            disabled={
              orderDetail && orderDetail.status === "Shipping" ? false : true
            }
            onClick={() => handleSetNewStatus(orderDetail.orderId, "Done")}
            variant="contained"
          >
            Received
          </Button>
        </Box>
      </Box>
    </>
  );
}
