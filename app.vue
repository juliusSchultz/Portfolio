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
  title: 'Julius Schultz - Web Development',
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
</script>
