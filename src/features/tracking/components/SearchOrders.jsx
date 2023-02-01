import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { fetchOrderSearchResultSuccess } from "../trackingSlice";
import { handleSearchOrders } from "../trackingThunk";
import { useDispatch } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";

function SearchOrders({ setOrderDetail }) {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") return;
    dispatch(handleSearchOrders(value));
  }, [dispatch, value]);

  const handleClearText = () => {
    setValue("");
    setOrderDetail(null);
    dispatch(fetchOrderSearchResultSuccess([]));
  };

  return (
    <FormControl
      sx={{
        mb: "2em",
        width: "100%",
      }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">
        Your order ID
      </InputLabel>
      <OutlinedInput
        sx={{ width: "100%" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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

const Error = ({ error }) => {
  return <div>{error.message}</div>;
};

export default withErrorBoundary(SearchOrders, {
  FallbackComponent: Error,
});
