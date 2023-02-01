import "./Checkout.css";

import { AddressForm } from "features/users/checkout/components/AddressForm";
import Box from "@mui/material/Box";
import Empty from "components/Common/Empty/Empty";
import { Images } from "constants/images";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import ReviewOrder from "features/users/checkout/pages/ReviewOrder/ReviewOrder";
import ScrollToTop from "components/Common/ScrollToTop/ScrollToTop";
import ShoppingBags from "features/users/checkout/components/ShoppingBags";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { selectListCart } from "features/users/cart/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

function Checkout(props) {
  const cartList = useSelector(selectListCart);
  const localCartList = JSON.parse(localStorage.getItem("cart"));

  const [value, setValue] = useState("1");

  // useEffect(() => {
  //   socket.on("order_successful", (data) => {
  //     console.log(`received message - order successful`, data);
  //     dispatch(setOrderData(data));
  //   });
  // }, [socket]);

  if (
    (cartList && cartList.length === 0) ||
    (localCartList && localCartList.length === 0)
  )
    return (
      <Empty
        title="Oops😢"
        image={Images.emptyCart}
        content="You don't have any items in your shopping cart🤧"
        buttonText="Continue shopping"
        route="/product"
        width="50%"
        height="50%"
      />
    );
  else
    return (
      <div className="checkout_container">
        <ScrollToTop />

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#d4a0a2",
                  },
                }}
                centered
                // onChange={(event, newValue) => setValue(newValue)}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{
                    "&.Mui-selected": {
                      color: "#d4a0a2",
                    },
                  }}
                  icon={<LooksOneRoundedIcon />}
                  label="Your information"
                  value="1"
                />
                <Tab
                  sx={{
                    "&.Mui-selected": {
                      color: "#d4a0a2",
                    },
                  }}
                  icon={<LooksTwoRoundedIcon />}
                  label="Review your order"
                  value="2"
                  wrapped
                />
              </TabList>
            </Box>
            <div className="checkout_content">
              <div className="checkout_content_left">
                <TabPanel value="1">
                  <AddressForm setValue={setValue} />
                </TabPanel>
                <TabPanel value="2">
                  <ReviewOrder setValue={setValue} />
                </TabPanel>
              </div>

              <div className="checkout_content_right">
                <ShoppingBags setValue={setValue} value={value} />
              </div>
            </div>
          </TabContext>
        </Box>
      </div>
    );
}

export default Checkout;
