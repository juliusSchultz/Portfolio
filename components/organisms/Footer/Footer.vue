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
        Copyright &#169; 2024 Julius Schultz. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import socialMedia from '~/components/molecules/SocialMedia/SocialMedia.vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const links = [
      { href: '/about', label: 'About' },
      { href: '/experience', label: 'Experience' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact' },
    ]

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

    return {
      links,
      socialMedia,
    }
  },
  computed: {
    socialMedia() {
      return socialMedia
    },
  },
})
</script>

<style>
.footer {
  height: 26vh;

  &__grey {
    @apply bg-grey-16;
    color: white;
  }

  &__links {
    @apply py-6;
    @apply flex;
    @apply flex-col;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1rem;
    gap: 0.5rem;

    @screen md {
      gap: 2rem;
      font-size: 1.5rem;
      @apply flex-row;
    }
  }

  &__link {
    text-decoration: none;
    text-decoration-color: white;
    @apply font-sans;
  }

  &__link:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);

    @screen md {
      text-underline-offset: 1rem;
    }
  }

  &__copyright {
    @apply pb-4;
    @apply text-sm;
    text-align: center;
  }
}
</style>
