import { PrismaClient } from "@prisma/client";
import { singleton } from "./singleton.server";

type User = {
  name: string;
  email: string;
  username: string;
  picture: string | null;
};

const db = singleton("prisma", () => new PrismaClient());
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

export async function getUserById(id: number) {
  return await db.user.findUnique({ where: { id: id } });
}
