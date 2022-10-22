import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  //set up state for favourite
  const [isFavourite, setIsFavourite] = useState(true);

  //destructure listing object
  const { id, description, image, location } = listing;

  //handler to toggle isFavourite state on button click
  function toggleIsFavourite(){
    setIsFavourite(prevState => !prevState);
  }

  //handler to delete listing on button click
  //invokes the callback function prop
  function handleDeleteListing(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavourite ? (
          <button className="emoji-button favorite active" onClick={toggleIsFavourite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleIsFavourite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
