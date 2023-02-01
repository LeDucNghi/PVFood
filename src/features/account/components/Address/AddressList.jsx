import "../../pages/styles/Address.css";

import { handleDelete, handleSetDefaultAddress } from "../../accountThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import Loading from "components/Common/Loading/Loading";
import SettingsIcon from "@mui/icons-material/Settings";
import { selectAccountDetail } from "../../accountSlice";
import { withErrorBoundary } from "react-error-boundary";

function AddressList({ open, setOpen, setIsEdit }) {
  const dispatch = useDispatch();
  const accountDetail = useSelector(selectAccountDetail);

  const [addressList, setAddressList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const time = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    setAddressList(accountDetail.address);
  }, [accountDetail]);

  const handleDeleteAddress = (id) => {
    const newList = addressList.filter((el) => el.id !== id);
    setAddressList(newList);
    dispatch(
      handleDelete({
        list: newList,
        isOrderList: false,
      })
    );
  };

  if (isLoading) return <Loading height="100%" />;
  if (accountDetail && !accountDetail.address)
    return (
      <Empty
        title="Oops😢"
        image={Images.emptyCart}
        content="You don't have any address"
        showButton={false}
        margin="6em auto"
        width="50%"
        height="50%"
      />
    );
  return (
    <>
      {addressList.map((items, key) => {
        return (
          <div key={key}>
            <div className="order_items">
              <h6>
                {items.name} || <span>Phone: {items.phone} </span>
              </h6>
              <p>
                <span>Address: {items.address} </span>
                {items.default === true && <span>Default</span>}
              </p>
              <div className="order_items_btn">
                <Button
                  color="error"
                  startIcon={<DeleteIcon />}
                  variant="text"
                  onClick={() => handleDeleteAddress(items.id)}
                >
                  Delete
                </Button>
                <Button
                  color="success"
                  startIcon={<SettingsIcon />}
                  disabled={items.default === true}
                  variant="text"
                  onClick={() =>
                    dispatch(handleSetDefaultAddress(items.address))
                  }
                >
                  Set as default
                </Button>
              </div>
            </div>
            <Divider className="order_divider" variant="middle" />
          </div>
        );
      })}
    </>
  );
}

const Error = ({ error }) => {
  return <div>{error.message}</div>;
};

export default withErrorBoundary(AddressList, {
  FallbackComponent: Error,
});
