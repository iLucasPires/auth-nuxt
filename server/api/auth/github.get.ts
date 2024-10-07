import { createUser } from "~~/server/models/user";

export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user }) {
    const existingUser = await createUser({
      name: user.name,
      username: user.login,
      avatar: user.avatar_url,
    });

    await setUserSession(event, {
      user: existingUser,
    });

    return sendRedirect(event, "/admin");
  },

  onError(event, error) {
    console.error("GitHub OAuth error:", error);
    return sendRedirect(event, "/");
  },
});
