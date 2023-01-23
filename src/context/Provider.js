import React, { createContext, useReducer } from "react";
import auth from "./reducers/auth";
import authInitialState from "./initialState/authState";
import contacts from "./reducers/contacts";
import contactInitialState from "./initialState/contactState";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactState,
        authDispatch,
        contactDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
