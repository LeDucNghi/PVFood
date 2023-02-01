import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";

export default function CustomDrawer({
  openDrawer,
  width,
  children,
  onClose,
  anchor,
}) {
  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
      anchor={anchor}
      open={openDrawer}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}

CustomDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  width: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

CustomDrawer.defaultProps = {
  anchor: "right",
  openDrawer: false,
  width: 240,
};
