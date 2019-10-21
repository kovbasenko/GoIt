import React from "react";

const Contacts = ({
  contacts,
  changeFilter,
  filteredContacts,
  removeContact,
  filter,
}) => {
  return contacts.length !== 0 ? (
    <section>
      <h2>Contacts</h2>
      {contacts.length > 1 ? (
        <input
          placeholder="Search..."
          value={filter}
          onChange={(e) => changeFilter(e.target.value)}
        />
      ) : null}
      <ul>
        {filteredContacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => removeContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null;
};

export default Contacts;
