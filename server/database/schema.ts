import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").notNull().primaryKey(),
  username: text("username").unique().notNull(),
  name: text("name").notNull(),
  avatar: text("avatar"),
  password: text("password").notNull(),
});
