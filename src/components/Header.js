import React from "react";
import Search from "./Search";

function Header({ onSearchListing }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchListing={onSearchListing}/>
    </header>
  );
}

export default Header;
