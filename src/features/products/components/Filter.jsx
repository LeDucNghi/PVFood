import "./styles/Filter.css";

import { resetParams, setNewFilterName } from "../productSlice";
import { useEffect, useState } from "react";

import { handleFetchByFilter } from "../productThunk";
import { productFilter } from "__mock__";
import { useDispatch } from "react-redux";

function Filter({ filterName, setFilterName }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetParams());

    dispatch(handleFetchByFilter(filterName));
  }, [dispatch, filterName]);

  const handleChangeFilterName = (name) => {
    filterName = name;
    setFilterName(filterName);
  };

  return (
    <div className="section">
      <h2>Filter</h2>
      {productFilter.map((item, key) => {
        return (
          <div key={key} className="filter_btn">
            <label>
              {item.name}
              <input
                type="radio"
                name="radio"
                defaultChecked={
                  item.filterName === "best seller" ? true : false
                }
                onChange={() => handleChangeFilterName(item.filterName)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
