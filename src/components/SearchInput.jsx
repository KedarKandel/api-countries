import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const SearchInput = ({ getCountryByName }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input)
    getCountryByName(input);
    setInput(null)
  };

  return (
    <form onSubmit={submitHandler} className="searchInput">
      <SearchIcon className="icon" />
      <input
        type="text"
        placeholder="Search a country......"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
