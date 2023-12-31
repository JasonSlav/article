import { PrismaClient } from "@prisma/client";
import { singleton } from "./singleton.server";

type User = {
  name: string;
  email: string;
  username: string;
  picture: string | null;
};

const db = new PrismaClient();
db.$connect();

export { db };

export async function findOrCreateUser(user: User) {
  return await db.user.upsert({
    where: {
      email: user.email,
    },
    update: {},
    create: {
      email: user.email,
      name: user.name,
      username: user.username,
      picture: user.picture,
    },
  });
}

export async function getUser(username: string) {
  return await db.user.findUnique({ where: { username } });
}

export async function createArticle(
  userId: number,
  title: string,
  content: string
) {
  return await db.article.create({
    data: {
      title,
      content,
      authorId: userId,
      published:false
    },
  });
}

export async function getPostById(postId: number) {
  return await db.article.findUnique({
    where: { id: postId },
    include: { author: true },
  });
}
