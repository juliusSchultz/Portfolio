<template>
  <nav class="tablet-header">
    <NuxtLink class="tablet-header__logo" to="./">
      <img
        class="tablet-header__logo-pic"
        src="~/assets/images/Logo.png"
        alt="Logo"
      />
      <div>Julius Schultz</div>
    </NuxtLink>
    <div class="tablet-header__menu-options">
      <LanguageSwitcher />
      <ul class="tablet-header__links">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink class="tablet-header__link" :to="link.href">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TabletOrDesktopHeader',
  setup() {
    const links = [
      { href: '/about', label: 'About' },
      { href: '/experience', label: 'Experience' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact' },
    ]

    return {
      links,
    }
  },
})
</script>

<style>
.tablet-header {
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  @apply text-grey-16;

  @screen md {
    justify-content: space-around;
  }

  &__logo {
    @apply flex flex-row;
    @apply items-center;
    @apply text-xl;
    @apply gap-x-4;
    @apply text-3xl;

    &:hover {
      @apply cursor-pointer;
    }
  }

  &__logo-pic {
    @apply w-[70px] h-[70px];
  }

  &__menu-options {
    @apply flex flex-col;
    @apply gap-y-3;
  }

  &__links {
    @apply flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
  }

  &__link {
    &:hover {
      @apply text-blue-lighter;
    }
  }
}
</style>
