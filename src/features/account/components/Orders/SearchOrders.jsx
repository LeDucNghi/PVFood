import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { selectAccountDetail } from "../../accountSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function SearchOrders({
  setOrderList,
  setOrderDetail,
  setIsLoading,
}) {
  const accountDetail = useSelector(selectAccountDetail);

  const [value, setValue] = useState("");

  const handleClearText = () => {
    setValue("");
    setOrderDetail(null);
    setOrderList(accountDetail.orders);
  };

  const handleChangeText = (e) => {
    let timer;

    setValue(e.target.value);
    setIsLoading(true);

    const newList = accountDetail.orders.filter((el) =>
      el.orderId.includes(value)
    );

    clearTimeout(timer);

    timer = setTimeout(() => {
      setIsLoading(false);
      setOrderList(newList);
    }, 500);
  };

  return (
    <FormControl
      sx={{
        width: "45%",
      }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">
        Your order ID
      </InputLabel>
      <OutlinedInput
        sx={{ width: "100%" }}
        value={value}
        // disabled={orderList.length === 0 ? true : false}
        onChange={(e) => handleChangeText(e)}
        id="outlined-adornment-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClearText}
              edge="end"
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Your order ID"
      />
    </FormControl>
  );
}
