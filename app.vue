<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
useHead({
  title: 'Julius Schultz -Web Development',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    { hid: 'description', name: 'description', content: '' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: '16x16',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  title: 'Julius Schultz - Web Development',
  ogTitle: 'Julius Schultz - Web Development',
  description:
    'This is the website of the software developer Julius Schultz. Go check it out!',
  ogDescription:
    'This is the website of the software developer Julius Schultz. Go check it out!',
  ogImage: 'https://www.juliusschultz.com/_nuxt/profile.BipV7A1d.png',
  twitterCard: 'summary_large_image',
})
</script>
