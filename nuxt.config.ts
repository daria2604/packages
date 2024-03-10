// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-svgo'],
  css: ['normalize.css/normalize.css'],
  svgo: {
    defaultImport: 'component',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/src/assets/scss/style.scss" as *;'
        }
      }
    }
  },
})
