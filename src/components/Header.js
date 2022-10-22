import React from "react";
import Search from "./Search";

function Header({ onSearchListing, onSort }) {
  
  function handleChange(event){
    onSort(event.target.value);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchListing={onSearchListing}/>
      <select name="location-sorter" id="location-sorter" onChange={handleChange}>
            <option value="default">Sort by</option>
            <option value="location">Location</option>
        </select>
    </header>
  );
}

export default Header;
