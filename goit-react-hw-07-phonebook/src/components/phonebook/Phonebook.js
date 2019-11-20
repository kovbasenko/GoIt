import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContact } from "../../redux/phonebookOperations";

const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.phonebook.contacts);

  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleChangeNumber = ({ target }) => {
    setNumber(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let repeat = false;

    contacts.forEach((contact) => {
      if (contact.name === name) {
        repeat = true;
        alert("Contact is already exist");
      }
    });

    !repeat &&
      name !== "" &&
      number !== "" &&
      dispatch(addContact({ name, number }));
  };

  return (
    <section>
      <h2 style={{ color: theme === "light" ? "black" : "white" }}>
        Phonebook
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeName}
          name="name"
          type="text"
          placeholder="Enter name..."
        />
        <br />
        <input
          onChange={handleChangeNumber}
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
