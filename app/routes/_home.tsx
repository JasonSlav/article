import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import { Form, Link } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = authenticator.isAuthenticated(request);
  if (user) {
    return json({ isLogged: true });
  }
  return json({ isLogged: false });
};

export default function HomeLayout() {
  const { isLogged } = useLoaderData<typeof loader>();
  const [theme, setTheme] = useTheme();
  const [isOpen, setOpen] = useState<boolean>();
  return (
    <>
      <nav className="py-2 px-4 flex justify-between items-center bg-overlay">
        <header className="text-xl">
          <Link to="/">JoyfulBytes</Link>
        </header>
        <div>
          <button
            type="button"
            onClick={() =>
              setTheme((prev) =>
                prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
              )
            }
            className="bg-foam p-2 m-2 rounded-md text-base"
          >
            {theme !== "dark" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
          <button
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          <div
            className={`flex justify-center items-center fixed inset-0 bg-surface ${
              !isOpen && "hidden"
            }`}
          >
            <button
              onClick={() => {
                setOpen(!isOpen);
              }}
              className="p-3 absolute right-0 top-0"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div
              className="grid grid-cols-1 text-center"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <Link to="/" className="text-xl py-2 px-4">
                Home
              </Link>
              {isLogged ? (
              <Link to="/new" className="text-xl py-2 px-4">
                Create Post
              </Link>
              <Link to="/profile" className="text-xl py-2 px-4">
                Profile
              </Link>
              <Link to="/logout" className="text-xl py-2 px-4">Logout</Link>
              ) : (
              <Form action="/auth/google" method="post">
                <button
                  type="submit"
                  className="bg-pine py-2 px-4 rounded-md text-base text-xl"
                >
                  Login
                </button>
              </Form>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
