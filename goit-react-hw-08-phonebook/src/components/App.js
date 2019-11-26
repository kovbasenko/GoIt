import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Phonebook from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";
import { theme } from "../redux/phonebookReducers";

const { toggle } = theme.actions;

const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state) => state.phonebookReducers.theme.themeColor
  );

  return (
    <section
      style={{
        backgroundColor: theme === "light" ? "white" : "grey",
      }}
    >
      <button onClick={() => dispatch(toggle())}>{theme}</button>
      <br />
      <Phonebook />
      <Contacts />
    </section>
  );
};

export default App;
