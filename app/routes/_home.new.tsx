import { createArticle, getUser } from "~/services/db.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const username = user!.username;
  const users = await getUser(username);
  if (users) {
    const article = await createArticle(users.id, title, content);
    return redirect(`/post/${article.id}`);
  }
};

export default function NewPost() {
  return (
    <div>
      <Form method="post">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" cols={30} rows={10}></textarea>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
}
