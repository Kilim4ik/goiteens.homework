export default function Controler({ handleFeedback }) {
  return (
    <div className="">
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
    </div>
  );
}
