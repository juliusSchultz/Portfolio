<template>
  <div ref="target" class="language-switcher">
    <div class="language-switcher__button" @click="isActive = !isActive">
      <Icon :size="size" icon="language" />
      <div class="language-switcher__label">Language</div>
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

defineProps({
  size: {
    type: String,
    default: 'base',
    validator: (val) => ['base', 'large'].includes(val),
  },
})

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
    @apply text-grey-32;
    @apply cursor-pointer;

    @screen lg {
      @apply text-grey-48;
    }
  }

  &__label {
    @apply hidden;

    @screen lg {
      @apply block;
    }
  }

  &__content {
    @apply absolute;
    width: 11rem;
    padding-top: 1rem;

    @scree lg {
      width: 12.75rem;
    }
  }

  &__content ul {
    @apply overflow-hidden;
    @apply h-full;
    @apply p-0;
    @apply rounded-md;
    @apply bg-white;
    @apply relative;
    @apply border-2;
    @apply border-grey-80;
    @apply shadow-black-15;
    right: 4.5rem;

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
    @apply text-sm;
    @apply leading-5;
    @apply py-3;
    @apply px-4;
    @apply text-grey-16;

    @screen lg {
      @apply text-base;
    }
  }
}
</style>
