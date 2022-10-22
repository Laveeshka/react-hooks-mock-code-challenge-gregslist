import React, {useState} from "react";

function Search({ onSearchListing }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log("submitted");
    onSearchListing(search);
  }

  function handleChange(event){
    setSearch(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
