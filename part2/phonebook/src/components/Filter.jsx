import React from "react";

const Filter = ({ matchedPersons, handleMatchedPersonsChange }) => (
  <div>
    filter shown with{" "}
    <input value={matchedPersons} onChange={handleMatchedPersonsChange} />
  </div>
);

export default Filter;
