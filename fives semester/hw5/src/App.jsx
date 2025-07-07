import "./App.css";
import dishes from "../data/dishes.json";
import styled from "styled-components";
import Dish from "./Dish";

const Section = styled.section`
  font-family: sans-serif;
  background-color: #f3f77b;
  padding: 32px 0 64px;
  .container {
    display: flex;
    gap: 12px;
    margin: 0 auto;
    max-width: 1120px;
  }
  .card {
    position: relative;
    display: grid;
    flex: 1;
    gap: 16px;
    justify-items: center;
    transition: all 0.6s;
  }
  .card:hover {
    transform: scale(1.1);
    box-shadow: 0px 24px 17px -5px #7e7e7e;
  }
  .hard-level-svg {
    width: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .dish-image {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 8px;
  }
  .dish-content {
    padding: 4px 0;
    border-radius: 12px;
    background: white;
  }
  .dish-info {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    div {
      display: flex;
      gap: 4px;
    }
  }
  .dish-difficulty {
    padding: 8px;
    div {
      display: flex;
      gap: 6px;
      margin: 0 18px;
    }
  }
  .difficulty {
    background-color: #f3f77b;
    color: black;
    padding: 5px;
    border-radius: 16px;
  }
  .difficulty.active {
    color: white;
    background-color: red;
  }
`;

function App() {
  return (
    <div className="App">
      <Section>
        <div className="container">
          {dishes.map(({ id, image, name, time, calories, difficulty }) => (
            <Dish
              key={id}
              image={image}
              name={name}
              time={time}
              calories={calories}
              difficulty={difficulty}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default App;
