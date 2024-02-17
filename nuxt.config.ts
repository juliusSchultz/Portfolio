// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  components: {
    global: true,
    // ignore: ['**/*.story.vue'],
    dirs: [{ path: '~/components', pathPrefix: false }],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vue-email/nuxt',
  ],

  vueEmail: {
    // baseUrl: 'https://vue-email-demo.vercel.app/',
    autoImport: true,
  },

  image: {
    dir: 'assets/images',
  },
})
