import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //set up state
  const [listings, setListings] = useState([]);
  const [searchText, setSearchText] = useState("");

  //useEffect hook to fetch listings onMount
  //update state
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listingsData => {
        setListings(listingsData);
      })
      .catch(err => console.warn(err.message))
  }, []);

  console.log(`Listings are ${listings}`);

  function handleDeleteListing(deletedListing){
    //update state
    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  const visibleListings = listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="app">
      <Header onSearchListing={setSearchText}/>
      <ListingsContainer listings={visibleListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
