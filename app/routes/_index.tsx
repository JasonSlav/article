import { useState } from "react";
import { Theme, useTheme } from "remix-themes";
import { Form } from "@remix-run/react";
export default function Index() {
  const [number, setNumber] = useState(999);
  const [theme, setTheme] = useTheme();
  const addNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1 className="text-8xl text-center p-3">JoyText</h1>
      <h2
        onClick={addNumber}
        className="bg-mauve text-4xl text-center text-base p-2"
      >
        {number}
      </h2>
      <button
        type="button"
        onClick={() =>
          setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
        }
        className="bg-sky p-2 m-2 rounded-md text-base"
      >
        Ubah tema ke {theme !== "dark" ? "gelap" : "terang"}.
      </button>
      <Form
        action="/auth/google"
        method="post"
        className="flex justify-center items-center p-4 bg-overlay0"
      >
        <button
          type="submit"
          className="bg-blue py-2 px-4 rounded-full text-base"
        >
          Login pake Google masbro
        </button>
      </Form>
    </>
  );
}
