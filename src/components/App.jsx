
import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {
  const [allHogs, setAllHogs] = useState(hogs);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function hideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function addHog(newHog) {
    setAllHogs([...allHogs, newHog]);
  }

  const visibleHogs = allHogs.filter((hog) => {
    return (
      !hiddenHogs.includes(hog.name) &&
      (!greasedOnly || hog.greased)
    );
  });

  if (sortBy === "name") {
    visibleHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    visibleHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <div className="ui container">
        <HogForm onAddHog={addHog} />
      </div>

      <div className="ui container">
        <h2>Hog Competition</h2>

        <label htmlFor="greased-filter">
          Greased Pigs Only?
        </label>
        <input
          id="greased-filter"
          type="checkbox"
          checked={greasedOnly}
          onChange={(event) =>
            setGreasedOnly(event.target.checked)
          }
        />

        <div style={{ margin: "20px 0" }}>
          <label htmlFor="sort-hogs">Sort by:</label>
          <select
            id="sort-hogs"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>

      <div className="ui grid container">
        {visibleHogs.map((hog) => (
          <HogCard
            key={hog.name}
            hog={hog}
            onHide={hideHog}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
