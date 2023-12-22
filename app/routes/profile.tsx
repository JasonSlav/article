import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { redirect } from "@remix-run/node";
export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (!user) {
    return redirect(`/login`);
  } else {
    return redirect(`/user/${user.username}`)
  }
}
