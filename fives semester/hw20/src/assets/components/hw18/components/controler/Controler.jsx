import { useContext } from "react";
import { StatisticContext } from "../../../../../context/statisticContext";

export default function Controler() {
  const { handleFeedback } = useContext(StatisticContext);
  return (
    <div className="">
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
    </div>
  );
}
