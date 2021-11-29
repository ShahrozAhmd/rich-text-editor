import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const Store = () => useContext(Context);

const ContextProvider = ({ initialState, reducer, children }) => { //()=>{}
  const [state, dispatch] = useReducer(initialState, reducer);

  return (
    <Context.Provider value={state, dispatch}>{children}</Context.Provider>
  );
};

export default ContextProvider;
