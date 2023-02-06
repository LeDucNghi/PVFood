import MuiAlert from "@mui/material/Alert";
import React from "react";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification({ notify, open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
      <Alert
        onClose={handleClose}
        severity={notify.severity}
        sx={{ width: "100%", fontSize: "1em" }}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;

export const ErrorNotification = ({ message }) => {};
