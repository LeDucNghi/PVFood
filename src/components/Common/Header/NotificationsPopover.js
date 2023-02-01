import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  selectAccountDetail,
  selectNotifications,
} from "features/account/accountSlice";
import { useRef, useState } from "react";

import Iconify from "./Iconify";
import MenuPopover from "./MenuPopover";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import Scrollbar from "./Scrollbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function NotificationsPopover() {
  const notification = useSelector(selectNotifications);
  const account = useSelector(selectAccountDetail);

  const anchorRef = useRef(null);

  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    setNotifications(notification);
  }, [notification]);

  const handleCheckIsUnRead = notifications.filter(
    (el) => el.isUnRead === false
  );

  const handleCheckIsRead = notifications.filter((el) => el.isUnRead === true);

  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" width={20} height={20} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
          {/* {notifications.length === 0 ? (
            <Empty
              margin="0 auto"
              image={Images.emptyCart}
              title="You don't have any notifications"
              showButton={false}
              width="100%"
              height="10%"
              fontSize={20}
            />
          ) : (
            <> */}
          {handleCheckIsRead.length !== 0 ? (
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline" }}
                >
                  New
                </ListSubheader>
              }
            >
              {/* {notifications.slice(0, 2).map((notification) => ( */}
              {notifications.map((notification) => {
                return (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    email={account.email}
                    notification={notification}
                    notifications={notifications}
                    setNotifications={setNotifications}
                  />
                );
              })}
            </List>
          ) : null}

          {handleCheckIsUnRead.length !== 0 ? (
            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline" }}
                >
                  Old
                </ListSubheader>
              }
            >
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))}
            </List>
          ) : null}
          {/* </>
          )} */}
        </Scrollbar>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};
