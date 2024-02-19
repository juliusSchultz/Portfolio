<template>
  <nav class="mobile-header">
    <NuxtLink class="mobile-header__logo" to="./">
      <img
        class="mobile-header__logo-pic"
        src="~/assets/images/Logo.png"
        alt="Logo"
      />
      <div>Julius Schultz</div>
    </NuxtLink>
    <div class="mobile-header__right-container">
      <LanguageSwitcher size="large" />
      <div class="mobile-header__hamburger-icon" @click="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul v-if="menuOpen" class="mobile-header__menu-links">
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink
          class="mobile-header__link"
          :class="'mobile-header__link--mobile'"
          :to="link.href"
          @click="toggleMenu"
        >
          <span :class="'mobile-header__link-label--mobile'">{{
            link.label
          }}</span>
        </NuxtLink>
        <div class="mobile-header__link-separator" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MobileHeader',
  setup() {
    const menuOpen = ref(false)
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const links = [
      { href: '/about', label: 'About' },
      { href: '/experience', label: 'Experience' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact' },
    ]

    return {
      //state
      menuOpen,
      links,

      //actions
      toggleMenu,
    }
  },
})
</script>

<style>
.mobile-header {
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  @apply text-grey-16;

  &__logo {
    @apply flex flex-row;
    @apply items-center;
    padding-left: 40px;
    @apply text-xl;
    @apply gap-x-3;

    &:hover {
      @apply cursor-pointer;
    }
  }

  &__logo-pic {
    @apply w-[40px] h-[40px];
  }

  &__right-container {
    @apply flex flex-row;
    @apply gap-4;
    align-items: center;
    @apply pr-10;
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

  &__hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;

    span {
      width: 100%;
      height: 2.5px;
      @apply bg-grey-32;
      transition: all 0.3 ease-in-out;
    }
  }

  &__menu-links {
    position: absolute;
    background-color: white;
    width: 100%;
    margin-top: 350px;
    z-index: 1;
  }

  &__link-separator {
    border-bottom-color: black;
    border-bottom-width: 1px;
  }

  &__link {
    &--mobile {
      @apply flex;
    }

    &:hover {
      @apply text-white;
      @apply bg-blue-lighter;
    }
  }

  &__link-label {
    &--mobile {
      @apply py-5;
      @apply pl-10;
    }
  }
}
</style>
