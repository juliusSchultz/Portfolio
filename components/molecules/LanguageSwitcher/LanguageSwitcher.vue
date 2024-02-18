<template>
  <div ref="target" class="language-switcher">
    <div class="language-switcher__button" @click="isActive = !isActive">
      <Icon icon="language" />
      <div>Language</div>
    </div>
    <div v-if="isActive" class="language-switcher__content">
      <ul>
        <NuxtLink
          v-for="lang in locales"
          :key="lang.code"
          :to="switchLocale(lang.code)"
        >
          <li>{{ lang.name }}</li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { switchLocale } from '~/utils/switchLocale'
import { useLanguageSwitch } from '~/composables/useLanguageSwitch'

const { locales } = useI18n()

const target = ref(null)
const isActive = ref(false)

onClickOutside(target, () => (isActive.value = false))

const { onLanguageSwitched } = useLanguageSwitch()
onLanguageSwitched('switcher', () => {
  isActive.value = false
})
</script>

<style>
.language-switcher {
  @apply self-end;

  &__button {
    @apply flex flex-row;
    @apply gap-x-3;
    @apply text-grey-48;
    @apply cursor-pointer;
  }

  &__content {
    @apply absolute;
    width: 12.75rem;
    padding-top: 1rem;
  }

  &__content ul {
    @apply overflow-hidden;
    @apply h-full;
    @apply p-0;
    @apply rounded-md;
    @apply bg-white;
    @apply relative;
    bottom: 14.75rem;
    @apply border-2;
    @apply border-grey-80;
    @apply shadow-black-15;

    @screen lg {
      @apply bottom-0;
      right: 4.5rem;
    }
  }

  &__content li:hover {
    @apply bg-blue-lighter;
    @apply text-white;
  }

  &__content li {
    @apply pl-2.5;
    @apply text-base;
    @apply leading-6;
    @apply py-3;
    @apply px-4;
    @apply text-grey-16;
  }
}
</style>
