import { useState } from "react";
import {Theme, useTheme } from "remix-themes"
export default function Index() {
  const [number, setNumber] = useState(999);
  const [,setTheme] = useTheme()
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1 className="text-8xl text-center p-3">Title web</h1>
      <h2 onClick={addNumber} className="bg-rosewater text-4xl text-center text-base p-2">{number}</h2>
      <button
        type="button"
        onClick={() =>
          setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
        }
        className="bg-crust p-2 rounded-md"
      >
        Toggle theme
      </button>
    </>
  );
}
