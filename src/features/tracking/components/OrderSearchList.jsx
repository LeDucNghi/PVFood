import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { handleStatusIcon } from "utils/orders";
import { selectOrderSearchResult } from "../trackingSlice";
import { useSelector } from "react-redux";

export default function OrderSearchList({ setOrderDetail }) {
  const orderSearchResults = useSelector(selectOrderSearchResult);
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   if (orderSearchResults && orderSearchResults.length !== 0) setChecked(true);
  // }, [orderSearchResults]);

  if (orderSearchResults && orderSearchResults.length === 0)
    return (
      <Empty
        width="100%"
        height="80%"
        margin="0 auto"
        image={Images.emptyCart}
        title="Please enter your order ID above to find your order 😊"
        showButton={false}
      />
    );
  return (
    <div className="ordersearch_list">
      {orderSearchResults &&
        orderSearchResults.length !== 0 &&
        orderSearchResults.map((items, key) => {
          return (
            // <Grow
            //   key={key}
            //   in={checked}
            //   style={{ transformOrigin: "0 0 0" }}
            //   {...(checked ? { timeout: 1000 } : {})}
            // >
            <div key={key}>
              <div className="order_items">
                <h6>
                  {items.info.userInfo.fullName}
                  <span>
                    {handleStatusIcon(items.status)} {items.status}
                  </span>
                </h6>
                <p>
                  <span>Address: {items.info.userInfo.address}</span>
                  <span>Phone: {items.info.userInfo.phone}</span>
                </p>
                <p>
                  <span>{items.createDate}</span>
                  <span>
                    Total:{" "}
                    {parseFloat(
                      items.info.shoppingInfo.finalPrice * 1000
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND", // minimumFractionDigits: 3,
                    })}
                  </span>
                </p>
                <div className="order_items_btn">
                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    variant="text"
                    //   onClick={() => dispatch(handleDeleteOrders(items.id))}
                  >
                    Delete
                  </Button>
                  <Button
                    color="success"
                    startIcon={<ModeEditIcon />}
                    variant="text"
                    onClick={() => setOrderDetail(items)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <Divider className="order_divider" variant="middle" />

              {/* {items.id === lastItem ? null : (
          <Divider className="order_divider" variant="middle" />
        )} */}
            </div>
            // </Grow>
          );
        })}{" "}
    </div>
  );
}
