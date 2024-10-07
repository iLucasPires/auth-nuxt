import { eq } from "drizzle-orm";
import { users } from "../database/schema";

interface User {
  username: string;
  name: string;
  avatar: string;
  password?: string;
}

export async function createUser(user: User) {
  const db = useDatabase();

  const exists = await db.query.users.findFirst({
    where: eq(users.username, user.username),
  });

  if (exists) return exists;

  const result = await db.insert(users).values({
    username: user.username,
    name: user.name,
    avatar: user.avatar,
    password: user.password || "",
  });

  if (!result) {
    throw createError({
      statusCode: 401,
      statusMessage: "Error creating user",
    });
  }

  return result;
}
