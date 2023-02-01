import {
  Avatar,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";

import Empty from "components/Common/Empty/Empty";
import Grow from "@mui/material/Grow";
import { Images } from "constants/images";
import Loading from "components/Common/Loading/Loading";
import { WavyLink } from "react-wavy-transitions";

export default function SearchList({ searchList, isLoading, handleRedirect }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (searchList && searchList.length !== 0) {
      setChecked(true);
    }
  }, [searchList]);

  return (
    <div className="search_result">
      <div className="search_result_head">
        <p>Products</p>
        <Fab color="primary" aria-label="add" size="medium" disabled>
          {searchList.length}
        </Fab>
      </div>

      <List
        sx={{
          width: "100%",
          height: "300px",
          overflow: "auto",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {isLoading ? (
          <Loading height="100%" />
        ) : searchList.length === 0 ? (
          <Empty
            width="100%"
            height="100%"
            margin="auto"
            showButton={false}
            image={Images.emptyCart}
            title="Can not find your product"
          />
        ) : (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {searchList.map((items, key) => {
              return (
                <Grow
                  key={key}
                  in={checked}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(checked ? { timeout: 1000 } : {})}
                >
                  {/* <WavyLink
                      duration={1000}
                      color="#f08080"
                      to={`/product/${items.id}`}
                    > */}
                  <ListItem onClick={() => handleRedirect(items.id)}>
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "#fdf2f6",
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={
                            items && items.imageUrl
                              ? items.imageUrl
                              : Images.product1Img
                          }
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${items.name}`}
                        secondary={parseFloat(
                          items && items.price ? items.price * 1000 : 0
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND", // minimumFractionDigits: 3,
                        })}
                      />
                    </ListItemButton>
                  </ListItem>
                  {/* </WavyLink> */}
                </Grow>
              );
            })}
          </List>
        )}
      </List>
    </div>
  );
}
