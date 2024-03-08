<template>
  <footer class="footer">
    <SocialMedia :social-media="socialMedia" />
    <div class="footer__grey">
      <nav>
        <div class="nav-links-container">
          <ul class="footer__links">
            <li v-for="(link, index) in links" :key="index">
              <NuxtLink class="footer__link" :to="link.href">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <p class="footer__copyright">
        {{ $t('footer.copyright1') }} &#169; {{ $t('footer.copyright2') }}
      </p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const { t } = useI18n()

    const socialMedia = [
      {
        icon: 'linkedin',
        title: 'Linked In',
        to: 'https://www.linkedin.com/in/julius-schultz-670b54173/',
      },
      {
        icon: 'github',
        title: 'GitHub',
        to: 'https://github.com/juliusSchultz',
      },
    ]

    const links = computed(() => {
      return [
        { href: '/experience', label: t('header.experienceLabel') },
        { href: '/projects', label: t('header.projectsLabel') },
        { href: '/contact', label: t('header.contactLabel') },
        { href: '/imprint', label: t('imprint.sectionHeadline2') },
      ]
    })

    return {
      socialMedia,
      links,
    }
  },
})
</script>

<style>
.footer {
  height: 26vh;

  &__grey {
    @apply bg-grey-16;
    @apply bg-[url('~/assets/images/gradient-black-background-with-wavy-lines.jpg')];
    @apply text-white;
    padding-top: 150px;
    --mask: radial-gradient(13.42rem at 50% 18rem, #000 99%, #0000 101%)
        calc(50% - 12rem) 0/24rem 100%,
      radial-gradient(13.42rem at 50% -12rem, #0000 99%, #000 101%) 50% 6rem/24rem
        100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }

  &__links {
    @apply py-6;
    @apply flex flex-col;
    @apply items-center justify-center;
    @apply text-base;
    gap: 0.5rem;

    @screen md {
      gap: 2rem;
      @apply text-xl;
      @apply flex-row;
    }
  }

  &__link {
    text-decoration-color: white;
    @apply text-base;
    @apply leading-7;
    @apply font-thin;
  }

  &__link:hover {
    @apply text-grey-64;
    text-decoration: underline;
    text-underline-offset: 0.5rem;

    @screen md {
      text-underline-offset: 0.75rem;
    }
  }

  &__copyright {
    @apply pb-4;
    @apply text-sm;
    text-align: center;
  }
}
</style>
