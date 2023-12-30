import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostById } from "~/services/db.server";
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  if (params.postId) {
    const post = await getPostById(parseInt(params!.postId));
    return json({ post });
  } else {
    return redirect("/");
  }
};

export default function ArticlePage() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <>
      <div>
        <p>Author : {post?.author.name}</p>
        <p>is Published : {post?.published}</p>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
    </>
  );
}
