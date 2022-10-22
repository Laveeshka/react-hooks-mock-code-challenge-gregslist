import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listingCards = listings.map((listing, index) => (<ListingCard key={listing.id} listing={listing}></ListingCard>));

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
