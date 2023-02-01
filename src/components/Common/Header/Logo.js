import { Box } from "@mui/material";
import { Images } from "constants/images";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <WavyLink duration={1000} color="#f08080" to="/home">
        <img
          style={{ width: "50px", height: "50px" }}
          src={Images.logo}
          alt=""
        />
      </WavyLink>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
