import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState(999);
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1 clasName="text-8xl text-center">{number}</h1>
      <button onClick={addNumber}>Tambah Angka</button>
    </>
  );
}
