// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  css: ["~/assets/styles/index.scss"],
});
