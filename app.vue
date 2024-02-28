<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo'],
  },
})

const { $i18n } = useNuxtApp()

useHead({
  title: 'Julius Schultz - Web Development',
  htmlAttrs: {
    lang: $i18n.locale,
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'This is the website of the software developer Julius Schultz. Go check it out!',
    },
    ...(i18nHead.value.meta || []),
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: '16x16',
      href: '/favicon.ico',
    },
    ...(i18nHead.value.link || []),
  ],
})
</script>
