import { joinURL } from 'ufo'

export default defineNuxtRouteMiddleware((to) => {
  const { $i18n } = useNuxtApp()

  if (to.fullPath.startsWith('/api')) {
    return
  }

  let { locale } = to.params

  const slug = to.fullPath
    .replaceAll('/de/', '/')
    .replaceAll('/en/', '/')
    .replaceAll('/pl/', '/')
    .replaceAll('/fr/', '/')
    .replaceAll('/zh/', '/')

  if (!$i18n.localeCodes.value.includes(locale)) {
    locale = null
  }

  if (locale && locale !== $i18n.locale.value) {
    console.log(`Changing locale from '${$i18n.locale.value}' to '${locale}'`)
    $i18n.setLocale(locale)
    $i18n.setLocaleCookie(locale)
  }

  if (!locale) {
    console.log('here')
    locale = $i18n.locale.value

    if (!$i18n.getLocaleCookie()) {
      console.log(`No cookie for locale yet, writing '${locale}'`)
      $i18n.setLocaleCookie(locale)
    }

    const newPath = joinURL('/', locale, slug)

    console.log(
      `Redirecting from '${decodeURI(to.fullPath)}' to '${decodeURI(newPath)}'`
    )

    return navigateTo({ path: newPath, query: to.query })
  } else {
    if (!$i18n.getLocaleCookie()) {
      console.log(`No cookie for locale yet, writing '${locale}'`)
      $i18n.setLocaleCookie(locale)
    }
  }

  return
})
