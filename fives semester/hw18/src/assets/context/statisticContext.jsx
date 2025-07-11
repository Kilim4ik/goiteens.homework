import { createContext, useState, useEffect } from "react";

export const StatisticContext = createContext();
export const StatisticProvider = ({ children }) => {
  const [goodFb, setGoodFb] = useState(0);
  const [neutralFb, setNeutralFb] = useState(0);
  const [badFb, setBadFb] = useState(0);
  const [totalFb, setTotalFb] = useState(0);
  const [positiveFb, setPositiveFb] = useState(0);
  const handleFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGoodFb((prev) => prev + 1);
        break;
      case "neutral":
        setNeutralFb((prev) => prev + 1);
        break;

      case "bad":
        setBadFb((prev) => prev + 1);
        break;
    }
  };
  const countTotalFeedback = () => {
    setTotalFb(() => goodFb + neutralFb + badFb);
  };
  const countPositiveFeedbackPercentage = () => {
    setPositiveFb(() => Math.floor((goodFb / totalFb) * 100));
  };
  useEffect(() => {
    countTotalFeedback();
  }, [goodFb, neutralFb, badFb]);
  useEffect(() => {
    countPositiveFeedbackPercentage();
  }, [totalFb]);
  return (
    <StatisticContext.Provider
      value={{
        goodFb,
        neutralFb,
        badFb,
        totalFb,
        positiveFb,
        handleFeedback,
      }}
    >
      {children}
    </StatisticContext.Provider>
  );
};
