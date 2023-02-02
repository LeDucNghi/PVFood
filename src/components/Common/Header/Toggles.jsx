import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LoginHover from "features/auth/components/LoginHover";
import NotificationsPopover from "./NotificationsPopover";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { WavyLink } from "react-wavy-transitions";
import { selectListCart } from "features/cart/cartSlice";
import { useSelector } from "react-redux";

export default function Toggles({ data, setOpenDrawer }) {
  const cartStorage = useSelector(selectListCart);

  const listCount = cartStorage ? cartStorage.length : [];

  return (
    <div className="toggle">
      {toggles.slice(0, 2).map((toggle, key) => {
        return (
          <Tooltip
            key={key}
            onClick={() =>
              setOpenDrawer({
                isOpen: true,
                component: `${toggle.component}`,
              })
            }
            arrow
            title={toggle.title}
          >
            <IconButton>
              {toggle.component === "cart" ? (
                <Badge color="error" badgeContent={listCount} showZero>
                  {toggle.icon}
                </Badge>
              ) : (
                <>{toggle.icon}</>
              )}
            </IconButton>
          </Tooltip>
        );
      })}

      {data ? (
        <>
          <NotificationsPopover />
          <LoginHover />
        </>
      ) : (
        <>
          {toggles.slice(2, 4).map((items, key) => {
            return (
              <Tooltip key={key} arrow title={items.title}>
                <IconButton>
                  <WavyLink
                    duration={1000}
                    color="#f08080"
                    to={items.route}
                    // className="col_text"
                  >
                    {items.icon}
                  </WavyLink>
                </IconButton>
              </Tooltip>
            );
          })}
        </>
      )}
    </div>
  );
}

const toggles = [
  {
    id: 1,
    icon: <SearchIcon fontSize="medium" />,
    title: "Search for products",
    component: "search",
  },
  {
    id: 2,
    icon: <ShoppingCartIcon fontSize="medium" />,
    title: "Your cart",
    component: "cart",
  },
  {
    id: 3,
    icon: <LocalShippingIcon fontSize="medium" />,
    title: "Track your order",
    route: "/tracking",
  },
  {
    id: 4,
    icon: <PersonIcon fontSize="medium" />,
    title: "Login",
    route: "/login",
  },
];
