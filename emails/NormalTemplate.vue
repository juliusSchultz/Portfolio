<template>
  <e-html lang="en">
    <e-button :href="url"> View on GitHub </e-button>
  </e-html>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: '',
  },
})
</script>
