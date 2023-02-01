import "./styles/Search.css";

import { useEffect, useState } from "react";

import SearchList from "./SearchList";
import { TextField } from "@mui/material";
import { selectProductList } from "../productSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Search({ setOpenSearch }) {
  const navigate = useNavigate();

  const productList = useSelector(selectProductList);

  const [keyWord, setKeyWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    handleSearchProduct();
  }, [keyWord]);

  const handleSearchProduct = () => {
    let time;
    setIsLoading(true);
    const newList = productList.filter((el) => el.name.includes(keyWord));

    clearTimeout(time);

    time = setTimeout(() => {
      if (!keyWord) {
        setSearchList([]);
      } else setSearchList(newList);

      setIsLoading(false);
    }, 1000);
  };

  const handleTextChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleRedirect = (id) => {
    setKeyWord("");
    setOpenSearch(false);
    navigate(`/product/${id}`);
  };

  return (
    <div className="search_container">
      <div id="search_form" className="search_section">
        <h2 className="search_form_title">Search the store</h2>

        <TextField
          fullWidth
          value={keyWord}
          onChange={(e) => handleTextChange(e)}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
      </div>

      <SearchList
        searchList={searchList}
        isLoading={isLoading}
        handleRedirect={handleRedirect}
      />
    </div>
  );
}

export default Search;
