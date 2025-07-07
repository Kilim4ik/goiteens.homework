import "./App.css";
import Button from "./components/button/Button";
import Greeting from "./components/greeting/Greeting";
import Message from "./components/message/Message";

function App() {
  const onClick = () => {
    console.error(
      "Uncaught TypeError: Cannot read properties of undefined (reading 'onClick')"
    );
  };
  return (
    <>
      <Greeting name="John" />
      <Message text="lorem100" />

      <Button onClick={onClick} />
    </>
  );
}

export default App;
