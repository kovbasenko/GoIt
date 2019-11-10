import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, changeFilter } from "./phonebookActions";

const initialState = {
  contacts: localStorage.getItem("contacts")
    ? [...JSON.parse(localStorage.getItem("contacts"))]
    : [],
  filter: "",
};

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
