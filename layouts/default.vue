<template>
  <Header />
  <div class="page-content">
    <slot />
  </div>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style>
.page-content {
  min-height: 500px;
  @apply px-10;
  @apply py-10;

  @screen lg {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
