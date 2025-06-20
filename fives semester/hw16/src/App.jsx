import { useEffect, useState } from "react";
import "./App.css";
import Controler from "./assets/components/controler/Controler";
import Statistics from "./assets/components/statistics/Statistics";
import Notification from "./assets/components/notification/Notification";
import Section from "./assets/Section";

function App() {
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
    <div className="App">
      <Section title="Please leave feedback">
        <Controler handleFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFb ? (
          <Statistics
            good={goodFb}
            neutral={neutralFb}
            bad={badFb}
            total={totalFb}
            positive={positiveFb}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
