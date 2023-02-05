import { FormControl, InputLabel } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Input() {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        Old Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        // type={showPassword.oldPass ? "text" : "password"}
        // onChange={handleChange}
        // onBlur={handleBlur}
        size="medium"
        className="password_field"
        fullWidth
        // id="outlined-error-helper-text"
        label="Old Password"
        variant="outlined"
        // value={values.oldPass}
        name="oldPass"
        // error={touched.oldPass && Boolean(errors.oldPass)}
        // helperText={touched.oldPass && errors.oldPass}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              //   onClick={() =>
              //     setShowPassword({
              //       ...showPassword,
              //       oldPass: !showPassword.oldPass,
              //     })
              //   }
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {/* {showPassword.oldPass ? <VisibilityOff /> : <Visibility />} */}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
