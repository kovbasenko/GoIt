import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/phonebookOperations";

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(
    (state) => state.phonebookReducers.phonebook.contacts
  );
  const theme = useSelector(
    (state) => state.phonebookReducers.theme.themeColor
  );

  const [filter, changeFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChangeFilter = ({ target }) => {
    changeFilter(target.value);
  };

  return contacts.length !== 0 ? (
    <section>
      <h2 style={{ color: theme === "light" ? "black" : "white" }}>Contacts</h2>
      {contacts.length > 1 ? (
        <input
          placeholder="Search..."
          value={filter}
          onChange={handleChangeFilter}
        />
      ) : null}
      <ul>
        {filteredContacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li
              key={id}
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              {name}: {number}
              <button onClick={() => dispatch(removeContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null;
};

export default Contacts;
