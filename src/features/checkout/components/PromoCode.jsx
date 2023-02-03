import { List, ListItem, ListItemButton, Tooltip } from "@mui/material";

import CustomModal from "components/Common/Modal/Modal";
import { Ticket } from "components/Common/Ticket/Ticket";
import { fakePromoCodes } from "__mock__";
import { postPromoCodes } from "../checkoutSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PromoCode({ open, setOpen }) {
  const dispatch = useDispatch();

  const [selectedPromo, setSelectedPromo] = useState(0);

  const handleChoosePromoCodes = (item) => {
    dispatch(postPromoCodes(item));
    setSelectedPromo(item.id);
    setOpen(!open);
  };

  const style = {
    width: 600,
    height: 500,
    overflow: "auto",
  };

  return (
    <CustomModal
      style={fakePromoCodes.length >= 4 ? style : null}
      openModal={open}
      onClose={() => setOpen(!open)}
    >
      <h4 style={{ textAlign: "center" }}>
        Please choose one of these promo code
      </h4>
      <List>
        {fakePromoCodes.map((items, key) => {
          return (
            <ListItem key={key} onClick={() => handleChoosePromoCodes(items)}>
              <Tooltip title={items.ticketDescribe} arrow>
                <ListItemButton selected={selectedPromo === items.id}>
                  <Ticket
                    ticketTime={items.ticketTime}
                    ticketName={items.ticketName}
                    ticketDescribe={items.ticketDescribe}
                    ticketPercent={items.ticketPercent}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </CustomModal>
  );
}
