<template>
  <Header />
  <div class="page-content">
    <slot />
  </div>
  <Footer />
</template>

<script setup lang="ts"></script>
<style>
.page-content {
  min-height: 500px;
  @apply px-10;
}
</style>
