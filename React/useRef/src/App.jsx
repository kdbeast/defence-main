import "./App.css";
import Login from "./Login";
import Video from "./Video";
import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);

  const intervalIdRef = useRef(null);

  const startTimer = () => {
    if (intervalIdRef.current !== null) return;
    intervalIdRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  };

  return (
    <>
      <h1>Stopwatch: {time}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <br />
      <Login />
      <br />
      <Video />
    </>
  );
}

export default App;
