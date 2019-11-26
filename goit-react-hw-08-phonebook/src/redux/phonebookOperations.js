import { phonebookContact } from "./phonebookReducers";
import axios from "axios";

const {
  addRequest,
  addSuccess,
  addError,
  getSucces,
  removeRequest,
  removeSuccess,
  removeError,
} = phonebookContact.actions;

export const addContact = (contact) => (dispatch) => {
  dispatch(addRequest());

  axios
    .post("http://localhost:2000/contacts", contact)
    .then((res) => dispatch(addSuccess(res.data)))
    .catch((error) => dispatch(addError(error)));
};

export const getContact = () => async (dispatch) => {
  dispatch(addRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then((res) => dispatch(getSucces(res.data)))
    .catch((error) => dispatch(addError(error)));
};

export const removeContact = (id) => async (dispatch) => {
  dispatch(removeRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(removeSuccess(id)))
    .catch((error) => dispatch(removeError(error)));
};
