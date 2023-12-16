import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(999);
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1 className="text-8xl text-center p-3">Title web</h1>
      <h2 onClick={addNumber} className="bg-rosewater text-4xl text-center p-2">{number}</h2>
    </>
  );
}
