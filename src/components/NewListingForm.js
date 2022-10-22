import { useState } from "react";

function NewListingForm({ onListingFormSubmit }) {
  //states for listing properties
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "description") {
      setDescription(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "image") {
      setImage(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newListing = {
      description,
      image,
      location,
    };
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((newListing) => onListingFormSubmit(newListing));
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input type="text" name="image" value={image} onChange={handleChange} />
      </label>
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default NewListingForm;
