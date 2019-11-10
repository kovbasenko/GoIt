import { v4 as uuidv4 } from "uuid";
import actionTypes from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

const { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } = actionTypes;

export const addContact = createAction(ADD_CONTACT, (name, number) => {
  return {
    payload: { id: uuidv4(), name, number },
  };
});

export const removeContact = createAction(REMOVE_CONTACT);

export const changeFilter = createAction(CHANGE_FILTER);
