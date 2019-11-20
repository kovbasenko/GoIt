import { createSlice, combineReducers } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

export const phonebookContact = createSlice({
  name: "phonebookContact",
  initialState,
  reducers: {
    addRequest: (state) => ({ ...state, loading: true }),
    addSuccess: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload],
      loading: false,
    }),
    addError: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
    getSucces: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, ...payload],
      loading: false,
    }),
    removeRequest: (state) => ({ ...state, loading: true }),
    removeSuccess: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts.filter((contact) => contact.id !== payload)],
      loading: false,
    }),
    removeError: (state, { payload }) => ({
      ...state,
      error: payload,
      loading: false,
    }),
  },
});

export const theme = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggle: (state) => (state === "light" ? "black" : "light"),
  },
});

export default combineReducers({
  phonebook: phonebookContact.reducer,
  theme: theme.reducer,
});
