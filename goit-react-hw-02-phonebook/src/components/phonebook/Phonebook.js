import React from "react";

const Phonebook = ({ handleSubmit, handleChange, name, number }) => {
  return (
    <section>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter name..."
          value={name}
        />
        <br />
        <input
          value={number}
          onChange={handleChange}
          name="number"
          type="number"
          placeholder="Enter phone num..."
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
};

export default Phonebook;
