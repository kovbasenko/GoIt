import React from "react";
import withTheme from "../hoc/withTheme";
import { connect } from "react-redux";
import { removeContact, changeFilter } from "../../redux/phonebookActions";

const Contacts = ({
  contacts,
  changeFilter,
  filteredContacts,
  filter,
  theme,
  removeContact,
}) => {
  return contacts.length !== 0 ? (
    <section>
      <h2 style={{ color: theme === "light" ? "black" : "white" }}>Contacts</h2>
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
            <li
              key={id}
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              {name}: {number}
              <button onClick={() => removeContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null;
};

const mapDispatchToProps = {
  removeContact,
  changeFilter,
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Contacts));
