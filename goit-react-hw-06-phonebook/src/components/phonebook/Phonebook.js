import React from "react";
import withTheme from "../hoc/withTheme";

const Phonebook = ({ handleSubmit, handleChange, name, number, theme }) => {
  return (
    <section>
      <h2 style={{ color: theme === "light" ? "black" : "white" }}>
        Phonebook
      </h2>
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

export default withTheme(Phonebook);
