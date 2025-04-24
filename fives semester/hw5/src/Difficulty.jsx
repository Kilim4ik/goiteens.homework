export default function Difficulty({ difficulty }) {
  switch (difficulty) {
  }
  return (
    <div className="dish-content dish-difficulty">
      <h3>Difficulty</h3>
      <div className="">
        <span className={`difficulty ${difficulty === 0 && "active"}`}>
          Easy
        </span>
        <span className={`difficulty ${difficulty === 1 && "active"}`}>
          Medium
        </span>
        <span className={`difficulty ${difficulty === 3 && "active"}`}>
          Hard
        </span>
      </div>
    </div>
  );
}
