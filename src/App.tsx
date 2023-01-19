import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App relative bg-blue-100 min-h-screen flex flex-col justify-start items-center py-[90px] px-[25px] lg:py-[67px]">
      <Heading />
      <Card />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.6875rem] text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/MoeHtetMyint99"
          target="_blank"
        >
          Moe Htet Myint
        </a>
        .
      </div>
    </main>
  );
}

export default App;
