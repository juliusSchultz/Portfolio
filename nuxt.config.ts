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

  site: {
    url: 'https://juliusschultz.com/',
    name: 'Julius Schultz - Web Developer',
    description:
      'This is the website of the software developer Julius Schultz. You will find information about his experience, projects, skills, and more. Go check it out!',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    sitemaps: {
      english: {
        includeAppSources: true,
        include: ['/en/**'],
      },
      german: {
        includeAppSources: true,
        include: ['/de/**'],
      },
      french: {
        includeAppSources: true,
        include: ['/fr/**'],
      },
      polish: {
        includeAppSources: true,
        include: ['/pl/**'],
      },
      chinese: {
        includeAppSources: true,
        include: ['/global/zh/**'],
      },
    },
  },

  components: {
    global: true,
    // ignore: ['**/*.story.vue'],
    dirs: [{ path: '~/components', pathPrefix: false }],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vue-email/nuxt',
  ],

  i18n: {
    baseUrl: baseURL,
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
