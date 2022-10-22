import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //set up state
  const [listings, setListings] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
