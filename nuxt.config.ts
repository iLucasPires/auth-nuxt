export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-openapi-docs-module",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
  ],
  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  colorMode: {
    preference: "light",
  },
});
