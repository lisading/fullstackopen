import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addNewRecord,
}) => (
  <form>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input alue={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit" onClick={addNewRecord}>
        add
      </button>
    </div>
  </form>
);

export default PersonForm;
