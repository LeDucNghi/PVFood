import "./styles/Filter.css";

import { useEffect, useState } from "react";

import DoneIcon from "@mui/icons-material/Done";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { handleFetchByFilter } from "../productThunk";
import { productFilter } from "__mock__";
import { resetParams } from "../productSlice";
import { useDispatch } from "react-redux";

function Filter({ filterName, setFilterName }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(0);

  useEffect(() => {
    dispatch(resetParams());

    dispatch(handleFetchByFilter(filterName));
  }, [dispatch, filterName]);

  useEffect(() => {
    productFilter.forEach((items) => {
      const { filterName } = items;

      if (filterName === "best seller") setChecked(1);
    });
  }, []);

  const handleChangeFilterName = (name, id) => {
    filterName = name;
    setFilterName(filterName);
    setChecked(id);
  };

  return (
    <div className="filter_section">
      <h2>
        Filter <FilterAltIcon />{" "}
      </h2>
      {productFilter.map((item, key) => {
        return (
          <label
            key={key}
            className="filter_btn"
            onClick={() => handleChangeFilterName(item.filterName, item.id)}
          >
            <span className="checkmark">
              <DoneIcon
                fontSize="small"
                className={
                  checked && checked === item.id ? "check checked" : "check"
                }
              />
            </span>

            <p className="filter_name">{item.name}</p>
          </label>
        );
      })}
    </div>
  );
}

export default Filter;
