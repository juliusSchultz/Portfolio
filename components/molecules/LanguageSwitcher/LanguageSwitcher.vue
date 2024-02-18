<template>
  <div class="language-switcher">
    <Icon icon="language" />
    <div>Language</div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.language-switcher {
  @apply flex flex-row;
  @apply self-end;
  @apply gap-x-3;
  @apply text-grey-48;
  @apply cursor-pointer;
}
</style>
