// import { createStore } from "redux";
import phonebookReducers from "./phonebookReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
  {
    reducer: phonebookReducers,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
