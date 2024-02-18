<template>
  <header>
    <nav class="header" :class="'header--tablet'">
      <div class="header__logo">
        <NuxtImg class="header__logo-pic" src="Logo.png" alt="Logo" />
        <div>Julius Schultz</div>
      </div>
      <div>
        <ul class="header__links">
          <li v-for="(link, index) in links" :key="index">
            <NuxtLink class="header__link" :to="link.href">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="header" :class="'header--mobile'">
      <div class="header__logo">Julius Schultz</div>
      <div class="header__hamburger-menu">
        <div class="header__hamburger-icon" @click="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul v-if="menuOpen" class="header__menu-links">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink
            class="header__link"
            :class="'header__link--mobile'"
            :to="link.href"
            @click="toggleMenu"
          >
            <span :class="'header__link-label--mobile'">{{ link.label }}</span>
          </NuxtLink>
          <div class="header__link-separator" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
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
.header {
  justify-content: space-between;
  align-items: center;
  height: 17vh;
  @apply text-grey-16;

  @screen md {
    justify-content: space-around;
  }

  &--mobile {
    @apply flex;

    @screen md {
      @apply hidden;
    }
  }

  &--tablet {
    @apply hidden;

    @screen md {
      @apply flex;
    }
  }

  &__logo {
    @apply flex flex-row;
    @apply gap-x-4;
    @apply items-center;
    padding-left: 40px;
    @apply text-xl;

    @screen md {
      padding-left: 0;
      @apply text-3xl;
    }
  }

  &__logo-pic {
    @apply w-[70px] h-[70px];
  }

  &__logo:hover {
    cursor: default;
  }

  &__links {
    @apply flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
  }

  &__link {
    text-decoration: none;
    text-decoration-color: white;
    @apply font-sans;
  }

  &__link:hover {
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);

    @screen md {
      text-decoration: underline;
    }
  }

  &__hamburger-menu {
    padding-right: 40px;
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
      height: 2px;
      @apply bg-grey-16;
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

      @screen md {
        @apply text-blue-darker;
        @apply bg-white;
      }
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
