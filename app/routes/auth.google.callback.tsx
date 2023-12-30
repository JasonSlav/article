import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export let loader = async ({ request }: LoaderFunctionArgs) => {
  return authenticator.authenticate("google", request, {
    failureRedirect: "/login",
    successRedirect: "/profile",
  });
};
