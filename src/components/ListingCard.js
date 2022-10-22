import React, { useState } from "react";

function ListingCard({ listing }) {
  //set up state for favourite
  const [isFavourite, setIsFavourite] = useState(true);

  //destructure listing object
  const { description, image, location } = listing;

  //handler to toggle isFavourite state on button click
  function toggleIsFavourite(){
    setIsFavourite(prevState => !prevState);
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
