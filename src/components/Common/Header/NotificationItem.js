import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import Iconify from "./Iconify";
import { Icons } from "constants/icons";
import { fToNow } from "utils";
import { handleUpdateNotify } from "features/account/accountThunk";
import { noCase } from "change-case";
import { useDispatch } from "react-redux";

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {noCase(notification.description)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: <img alt={notification.title} src={Icons.packageNotify} />,
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: <img alt={notification.title} src={Icons.shippingNotify} />,
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: <img alt={notification.title} src={Icons.mailNotify} />,
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: <img alt={notification.title} src={Icons.chatNotify} />,
      title,
    };
  }
  return {
    avatar: notification.avatar ? (
      <img alt={notification.title} src={notification.avatar} />
    ) : null,
    title,
  };
}

export default function NotificationItem({
  email,
  notification,
  notifications,
  setNotifications,
}) {
  const { avatar, title } = renderContent(notification);
  const dispatch = useDispatch();

  const params = {
    email,
    isUnRead: false,
  };

  const handleIsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
    dispatch(handleUpdateNotify(params));
  };

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
      onClick={handleIsRead}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: "background.neutral",
          }}
        >
          {avatar}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Iconify
              icon="eva:clock-outline"
              sx={{
                mr: 0.5,
                width: 16,
                height: 16,
              }}
            />
            {fToNow(notification.createdAt)}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
