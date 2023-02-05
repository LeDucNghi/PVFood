import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Empty from "components/Common/Empty/Empty";
import Filter from "components/Common/Filter/Filter";
import { Images } from "constants/images";
import Loading from "components/Common/Loading/Loading";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchOrders from "./SearchOrders";
import { handleDelete } from "../../accountThunk";
import { handleStatusIcon } from "utils/orders";
import { orders } from "__mock__";
import { selectAccountDetail } from "../../accountSlice";

export default function OrdersList({
  orderStatus,
  isFetching,
  setIsFetching,
  setOrderDetail,
}) {
  const dispatch = useDispatch();
  const accountDetail = useSelector(selectAccountDetail);

  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 1000);

    return clearTimeout(timer);
  }, []);

  useEffect(() => {
    setOrderList(accountDetail.orders);
  }, [accountDetail]);

  const handleFetchingProducts = (items) => {
    let time;

    setIsFetching(true);

    clearTimeout(time);

    time = setTimeout(() => {
      setIsFetching(false);
      setOrderDetail(items);
    }, 500);
  };

  const handleDeleteItem = async (id) => {
    setIsDeleting(true);

    const newList = await orderList.filter((el) => el.orderId !== id);
    await dispatch(
      handleDelete({
        list: newList,
        isOrderList: true,
      })
    );

    await setIsLoading(false);

    await setOrderList(newList);
  };

  if (
    accountDetail &&
    !accountDetail.orders
    // || orderList.length === 0
    // &&
    // accountDetail.orders.length === 0
  )
    return (
      <Empty
        width="100%"
        height="50%"
        title="You have not placed any orders yet"
        image={Images.emptyCart}
        showButton={false}
      />
    );
  else
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            mb: "2em",
          }}
        >
          <SearchOrders
            orderList={orderList}
            setOrderList={setOrderList}
            setOrderDetail={setOrderDetail}
            setIsLoading={setIsLoading}
          />
          <Typography variant="h5">or</Typography>
          <Filter
            orderList={orderList}
            setOrderList={setOrderList}
            setIsLoading={setIsLoading}
          />{" "}
        </Box>

        {isLoading ? (
          <Loading />
        ) : orderList.length === 0 ? (
          <Empty
            width="100%"
            height="50%"
            title="Can not find your order🤧"
            image={Images.emptyCart}
            showButton={false}
          />
        ) : (
          orderList.map((items, key) => {
            const lastItem = orders[orders.length - 1].id;

            return (
              <div key={key}>
                <Items
                  items={items}
                  lastItem={lastItem}
                  isDeleting={isDeleting}
                  orderStatus={orderStatus}
                  handleFetchingProducts={handleFetchingProducts}
                  handleDeleteItem={handleDeleteItem}
                />
              </div>
            );
          })
        )}
      </>
    );
}

const Items = ({
  items,
  lastItem,
  isDeleting,
  orderStatus,
  handleDeleteItem,
  handleFetchingProducts,
}) => {
  return (
    <>
      <div className="order_items">
        <h6>
          {items.info.userInfo.fullName}
          <span>
            {handleStatusIcon(
              orderStatus ? orderStatus.status : items.status,
              "small"
            )}{" "}
            {orderStatus ? orderStatus.status : items.status}
          </span>
        </h6>
        <p>
          <span>Address: {items.info.userInfo.address}</span>
          <span>Phone: {items.info.userInfo.phone}</span>
        </p>
        <p>
          <span>{items.createDate}</span>
          <span>
            {parseFloat(
              items.info.shoppingInfo.finalPrice * 1000
            ).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}{" "}
          </span>
        </p>
        <div className="order_items_btn">
          <Button
            color="error"
            startIcon={<DeleteIcon fontSize="small" />}
            variant="text"
            onClick={() => handleDeleteItem(items.id)}
            // onClick={() => dispatch(deleteOrders(items.orderId))}
          >
            {isDeleting ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              "Delete"
            )}
          </Button>
          <Button
            color="success"
            startIcon={<ModeEditIcon fontSize="small" />}
            variant="text"
            onClick={() => handleFetchingProducts(items)}
          >
            Edit
          </Button>
        </div>
      </div>

      {items.id === lastItem ? null : (
        <Divider className="order_divider" variant="middle" />
      )}
    </>
  );
};
