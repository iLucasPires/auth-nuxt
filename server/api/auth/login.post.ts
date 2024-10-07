import { eq } from "drizzle-orm";
import { users } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  const db = useDatabase();
  const body = await readBody(event);

  const result = await db.query.users.findFirst({
    where: eq(users.username, body.username),
  });

  if (!result) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    });
  }

  if (result) {
    if (result.password !== body.password) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid username or password",
      });
    }

    await setUserSession(event, {
      user: {
        id: result.id,
        name: result.name,
        username: result.username,
        avatar: result.avatar,
      },
      loggedInAt: Date.now(),
    });
    return result;
  }
});
