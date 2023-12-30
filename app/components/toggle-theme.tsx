import { Theme, useTheme } from "remix-themes";

export default function ToggleTheme() {
  return (
    <button
      type="button"
      onClick={() =>
        setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
      }
      className="bg-pine p-2 m-2 rounded-md text-base"
    >
      Ubah tema ke {theme !== dark ? gelap : terang}.{" "}
    </button>
  );
}
