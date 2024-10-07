const routesProtected = new Set(["/admin"]);

export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn, ready } = useUserSession();
  
  if (!loggedIn.value && to.path !== "/auth") {
    return navigateTo("/auth");
  }

  if (loggedIn.value && to.path === "/auth") {
    return navigateTo("/admin");
  }
});
