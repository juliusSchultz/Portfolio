import { availableLocales } from './i18n.config'

const baseURL = process.env.BASE_URL || 'http://localhost:3000'

const languageCodes = (process.env.LANGUAGE_CODES || 'en').split(',')

export const locales = availableLocales.filter((local: any) =>
  languageCodes.includes(local.code)
)

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
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vue-email/nuxt',
  ],

  i18n: {
    defaultLocale: process.env.DEFAULT_LANGUAGE_CODE,
    locales,
    strategy: 'no_prefix',
    langDir: 'i18n',
    detectBrowserLanguage: {
      cookieSecure: true,
      useCookie: true,
      cookieKey: 'i18nLanguage',
    },
  },

  vueEmail: {
    // baseUrl: 'https://juliusschultz.com/',
    autoImport: true,
  },

  image: {
    dir: 'assets/images',
  },

  runtimeConfig: {
    public: {
      baseURL: baseURL,
    },
  },

  ssr: true,
})
