import React, { Component } from "react";
import Phonebook from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";
import ThemeContext from "./context/ThemeContext";
import { connect } from "react-redux";
import { addContact } from "../redux/phonebookActions";

class App extends Component {
  state = {
    name: "",
    number: "",
    theme: "light",
  };

  componentDidUpdate(prevProps) {
    prevProps.contacts !== this.props.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    let check = false;

    this.props.contacts.forEach((contact) => {
      if (contact.name === e.target.children[0].value) {
        alert(`${e.target.children[0].value} is already in contacts`);
        check = true;
      }
      return;
    });

    if (name === "" || number === "" || check) {
      check = false;
      return;
    }

    this.props.addContact(name, number);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = () => {
    const { filter } = this.props;

    return this.props.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeTheme = () => {
    this.setState((prev) => {
      return { theme: prev.theme === "light" ? "black" : "light" };
    });
  };

  render() {
    const { name, number, theme } = this.state;

    return (
      <section
        style={{
          backgroundColor: theme === "light" ? "white" : "grey",
        }}
      >
        <ThemeContext.Provider value={theme}>
          <button onClick={this.changeTheme}>{theme}</button>
          <br />
          <Phonebook
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={name}
            number={number}
          />
          <Contacts
            contacts={this.props.contacts}
            filteredContacts={this.handleSearch()}
          />
        </ThemeContext.Provider>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
