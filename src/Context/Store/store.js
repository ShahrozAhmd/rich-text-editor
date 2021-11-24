import React, { createContext, useContext, useReducer } from "react";

export const Store = createContext();

export const useStore = () => useContext(Store);

const ContextProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(initialState, reducer);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};

export default ContextProvider;
