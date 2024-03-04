<template>
  <nav class="mobile-header">
    <NuxtLink class="mobile-header__logo" to="/">
      <img
        class="mobile-header__logo-pic"
        src="~/assets/images/Logo.png"
        :alt="$t('header.imageLogoAlt')"
      />
      <div>{{ $t('indexPage.name') }}</div>
    </NuxtLink>
    <div class="mobile-header__right-container">
      <LanguageSwitcher size="large" />
      <div class="mobile-header__hamburger-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul v-if="menuOpen" ref="menu" class="mobile-header__menu-links">
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
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'MobileHeader',
  setup() {
    const { t } = useI18n()
    const { currentRoute } = useRouter()

    const menuOpen = ref(false)

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const menu = ref(null)

    const links = computed(() => [
      { href: '/about', label: t('header.aboutLabel') },
      { href: '/experience', label: t('header.experienceLabel') },
      { href: '/projects', label: t('header.projectsLabel') },
      { href: '/contact', label: t('header.contactLabel') },
    ])

    onClickOutside(menu, () => {
      menuOpen.value = false
    })

    watch(currentRoute, () => {
      menuOpen.value = false
    })

    return {
      //state
      menuOpen,
      links,
      menu,

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

  &__hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
    cursor: pointer;

    span {
      width: 100%;
      height: 4px;
      @apply bg-grey-32;
    }
  }

  &__menu-links {
    position: absolute;
    @apply bg-white;
    width: 100%;
    margin-top: 350px;
    z-index: 1;
  }

  &__link-separator {
    @apply border-b-grey-64;
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
