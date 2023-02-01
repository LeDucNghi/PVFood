import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const adminDrawer = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },

  {
    id: 2,
    name: "Users",
    path: "/admin/user",
    icon: <PersonIcon />,
  },

  {
    id: 3,
    name: "Orders",
    path: "/admin/order",
    icon: <ShoppingBasketIcon />,
  },

  {
    id: 4,
    name: "Products",
    path: "/admin/product",
    icon: <InventoryIcon />,
  },

  {
    id: 5,
    name: "About",
    path: "/admin/about",
    icon: <InfoIcon />,
  },

  {
    id: 6,
    name: "Trash",
    path: "/admin/trash",
    icon: <DeleteIcon />,
  },
];

export const accountDrawer = [
  {
    id: 1,
    drawerName: "My account",
    drawerPath: "account",
    drawerFormName: "Profile",
  },
  {
    id: 2,
    drawerName: "My order",
    drawerPath: "order",
    drawerFormName: "Order",
  },
  {
    id: 3,
    drawerName: "My favorites list",
    drawerPath: "favorites",
    drawerFormName: "Fav list",
  },
  {
    id: 4,
    drawerName: "My notifications",
    drawerPath: "notify",
    drawerFormName: "Notify",
  },
  {
    id: 5,
    drawerName: "Log out",
    drawerPath: "home",
    drawerFormName: "",
  },
];

export const productFilter = [
  {
    id: 1,
    name: "Best Seller",
    filterName: "best seller",
  },
  {
    id: 2,
    name: "Snack",
    filterName: "snack",
  },
  {
    id: 3,
    name: "Tay ninh Food",
    filterName: "tây ninh",
  },
  {
    id: 4,
    name: "Combo",
    filterName: "combo",
  },
  {
    id: 5,
    name: "Cereals",
    filterName: "ngũ cốc",
  },
];
