import "./Tracking.css";

import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Grow from "@mui/material/Grow";
import OrderDetail from "../../features/users/tracking/components/OrderDetail";
import OrderSearchList from "../../features/users/tracking/components/OrderSearchList";
import SearchOrders from "../../features/users/tracking/components/SearchOrders";
import { fetchOrderOptions } from "../../features/users/tracking/trackingThunk";
import { useDispatch } from "react-redux";

export default function Tracking() {
  const dispatch = useDispatch();

  const [orderDetail, setOrderDetail] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchOrderOptions());
  }, [dispatch]);

  useEffect(() => {
    if (!orderDetail) setChecked(false);
    else setChecked(true);
  }, [orderDetail]);

  return (
    <Box className="tracking_container">
      <Box className={checked ? "tracking_side" : "tracking_side left"}>
        <SearchOrders setOrderDetail={setOrderDetail} />

        <OrderSearchList setOrderDetail={setOrderDetail} />
      </Box>

      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Box className="tracking_side">
          <OrderDetail orderDetail={orderDetail} />
        </Box>
      </Grow>
    </Box>
  );
}
