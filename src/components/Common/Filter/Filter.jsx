import { useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { selectAccountDetail } from "features/users/account/accountSlice";
import { useSelector } from "react-redux";

export default function Filter({ orderList, setOrderList, setIsLoading }) {
  const accountDetail = useSelector(selectAccountDetail);

  const [filterName, setFilterName] = useState("All");

  useEffect(() => {
    handleFilterList();
  }, [filterName]);

  const handleFilterList = () => {
    let timer;

    if (filterName.includes("All")) {
      setIsLoading(true);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setIsLoading(false);
        setOrderList(accountDetail.orders);
      }, 500);
    } else {
      setIsLoading(true);

      const newList = orderList.filter((el) => el.status.includes(filterName));

      clearTimeout(timer);

      timer = setTimeout(() => {
        setIsLoading(false);
        setOrderList(newList);
      }, 500);
    }
  };

  return (
    <FormControl sx={{ width: "45%" }}>
      <InputLabel id="demo-simple-select-label">Order Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filterName ? filterName : filterOptions[0].filterName}
        label="Order Status"
        onChange={(e) => setFilterName(e.target.value)}
      >
        {filterOptions.map((items, key) => {
          return (
            <MenuItem key={key} value={items.filterName}>
              {items.filterName}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

const filterOptions = [
  {
    id: 1,
    filterName: "All",
  },
  {
    id: 2,
    filterName: "Pending",
  },
  {
    id: 3,
    filterName: "Shipping",
  },
  {
    id: 4,
    filterName: "Done",
  },
];
