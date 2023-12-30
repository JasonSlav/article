import { getUser } from "~/services/db.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  {
    const username = params.username;
    const user = await getUser(username!);
    let message = "";
    if (!user) {
      return json({ user, message: "User tidak ditemukan / username salah." });
    }
    return json({ user, message });
  }
};

export default function UserPage() {
  const { user, message } = useLoaderData<typeof loader>();
  return (
    <div>
      {message ? (
        <div>{message}</div>
      ) : (
        <>
          <div>
            {user?.picture && <img src={user.picture} alt={user.name} />}
          </div>
          <h1>{user?.name}</h1>
          <p>{user?.username}</p>
        </>
      )}
    </div>
  );
}
