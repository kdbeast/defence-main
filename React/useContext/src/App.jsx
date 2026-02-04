/* eslint-disable react-refresh/only-export-components */
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <CountContext value={{ count, setCount }}>
        <Header />
        <Body />
        <Footer />
      </CountContext>
    </>
  );
}

export default App;
