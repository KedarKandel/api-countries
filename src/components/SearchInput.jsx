import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("")
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
