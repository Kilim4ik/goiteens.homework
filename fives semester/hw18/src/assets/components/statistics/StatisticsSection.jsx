import { useContext } from "react";
import { StatisticContext } from "../../context/statisticContext";
import Section from "../Section";
import Controler from "../controler/Controler";
import Statistics from "../statistics/Statistics";
import Notification from "../notification/Notification";
export default function StatisticsSection() {
  const { totalFb, goodFb, neutralFb, badFb, positiveFb } =
    useContext(StatisticContext);
  return (
    <>
      <Section title="Please leave feedback">
        <Controler />
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
    </>
  );
}
