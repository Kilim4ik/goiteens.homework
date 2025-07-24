import { createContext, useState, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  const { goodFb, badFb, neutralFb } = state;
  switch (action.feedback) {
    case "good":
      return { ...state, goodFb: goodFb + 1 };
    case "neutral":
      return { ...state, neutralFb: neutralFb + 1 };
    case "bad":
      return { ...state, badFb: badFb + 1 };
    case "calc":
      const totalFb = goodFb + badFb + neutralFb;
      const positiveFb = Math.floor((goodFb / totalFb) * 100);
      return { ...state, totalFb, positiveFb };
  }
};
const initialState = {
  goodFb: 0,
  neutralFb: 0,
  badFb: 0,
  totalFb: 0,
  positiveFb: 0,
};
export const StatisticContext = createContext();
export const StatisticProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFeedback = (feedback) => {
    dispatch({ feedback });
    dispatch({ feedback: "calc" });
  };

  return (
    <StatisticContext.Provider
      value={{
        ...state,
        handleFeedback,
      }}
    >
      {children}
    </StatisticContext.Provider>
  );
};
