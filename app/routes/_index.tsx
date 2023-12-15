import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={addNumber}>Tambah Angka</button>
    </>
  );
}
