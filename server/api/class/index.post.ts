import { users } from "~~/server/db/schema";
import { useDatabase } from "~~/server/db/connection";

export default defineEventHandler(async (event) => {


  return {
    test: "oi",
  };
});
