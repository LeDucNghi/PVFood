import "./Account.css";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import ContactsIcon from "@mui/icons-material/Contacts";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import KeyIcon from "@mui/icons-material/Key";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import { selectAccountDetail } from "features/users/account/accountSlice";
import { useSelector } from "react-redux";

const drawerWidth = 250;
export default function AccountPage({ window }) {
  const accountDetail = useSelector(selectAccountDetail);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (!accountDetail)
    return (
      <Empty
        margin="5em auto"
        width="80%"
        height="80%"
        showButton={true}
        buttonText="Track your order 📌"
        route="/tracking"
        title="Oops"
        content="Look like you haven't login yet!🤔"
        image={Images.emptyCart}
      />
    );
  else
    return (
      <Box sx={{ display: "flex", height: "95vh" }}>
        <CssBaseline />

        <Box
          component="nav"
          sx={{ mt: "2em", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <UserDrawer />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <UserDrawer />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: "2em",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
}
AccountPage.propTypes = {
  window: PropTypes.func,
};

const UserDrawer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="account_container">
      <Toolbar />
      <Divider />
      <List>
        {drawerList.map((items, key) => (
          <ListItem
            sx={{ background: pathname === items.route ? "#f3e0d0" : "" }}
            key={key}
            disablePadding
            onClick={() => navigate(items.route)}
          >
            <ListItemButton>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const drawerList = [
  {
    id: 1,
    name: "Profile",
    icon: <AccountCircleIcon />,
    route: "/user/profile",
  },
  {
    id: 2,
    name: "Orders",
    icon: <ShoppingCartIcon />,
    route: "/user/orders",
  },
  {
    id: 3,
    name: "Address",
    icon: <ContactsIcon />,
    route: "/user/address",
  },
  {
    id: 4,
    name: "Password",
    icon: <KeyIcon />,
    route: "/user/password",
  },
];
