
import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [image, setImage] = useState("");
  const [medal, setMedal] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newHog = {
      name: name,
      weight: Number(weight),
      specialty: specialty,
      greased: greased,
      image: image,
      "highest medal achieved": medal
    };

    onAddHog(newHog);

    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
    setImage("");
    setMedal("");
  }

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h2>Add New Hog</h2>

      <label htmlFor="hog-name">Name:</label>
      <input
        id="hog-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="hog-weight">Weight:</label>
      <input
        id="hog-weight"
        type="number"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
        required
      />

      <label htmlFor="hog-specialty">Specialty:</label>
      <input
        id="hog-specialty"
        value={specialty}
        onChange={(event) => setSpecialty(event.target.value)}
        required
      />

      <label htmlFor="hog-image">Image:</label>
      <input
        id="hog-image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <label htmlFor="hog-medal">Highest Medal Achieved:</label>
      <input
        id="hog-medal"
        value={medal}
        onChange={(event) => setMedal(event.target.value)}
      />

      <label htmlFor="hog-greased">Greased?</label>
      <input
        id="hog-greased"
        type="checkbox"
        checked={greased}
        onChange={(event) => setGreased(event.target.checked)}
      />

      <button type="submit" className="ui button primary">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;
