import "./styles/Orders.css";

import OrderDetail from "../components/Orders/OrderDetail";
import OrdersList from "../components/Orders/OrdersList";
import { useState } from "react";

export default function YourOrders() {
  const [orderDetail, setOrderDetail] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  return (
    <div style={{ padding: "0 2em" }}>
      <div className="allorder_container">
        <div className="all_order">
          <OrdersList
            orderStatus={orderStatus}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
            setOrderDetail={setOrderDetail}
          />
        </div>

        <div className="order_detail">
          <OrderDetail
            isFetching={isFetching}
            orderDetail={orderDetail}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
          />
        </div>
      </div>
    </div>
  );
}
