import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);
  return json(user);
}

export default function User() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <div>
        {data?.picture && <img src={data.picture} alt={data.name} />}
        <p>name : {data!.name}</p>
        <p>username : {data!.username}</p>
        <p>email : {data!.email}</p>
      </div>
    </>
  );
}
