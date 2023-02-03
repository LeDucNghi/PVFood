import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { selectPromoCodes } from "../checkoutSlice";
import { useSelector } from "react-redux";

export default function CheckoutCode({ value, setOpen, open }) {
  const promoCodes = useSelector(selectPromoCodes);

  return (
    <div className="checkout_code">
      <div className="code_text">Bạn có mã khuyến mãi?</div>

      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Enter or select code
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          // type={values.showPassword ? "text" : "password"}
          value={
            promoCodes
              ? `${promoCodes.ticketName} - ${promoCodes.ticketPercent}%`
              : ""
          }
          fullWidth={true}
          // onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <IconButton
                  onClick={() => setOpen(!open)}
                  // className="code_button"
                  color="primary"
                  component="label"
                >
                  <ConfirmationNumberIcon fontSize="large" />
                </IconButton>
              </IconButton>
            </InputAdornment>
          }
          label="Enter or select code"
        />
      </FormControl>
    </div>
  );
}
