import { createUser } from "~~/server/models/user";

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const existingUser = await createUser({
      name: user.name,
      username: user.email,
      avatar: user.picture,
    });

    await setUserSession(event, {
      user: existingUser,
    });

    return sendRedirect(event, "/admin");
  },

  onError(event, error) {
    console.error("Google OAuth error:", error);
    return sendRedirect(event, "/");
  },
});
