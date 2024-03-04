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
      { href: '/experience', label: 'Experience' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact' },
      { href: '/imprint', label: 'Imprint' },
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
    background-image: url('https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149158069.jpg?t=st=1709567989~exp=1709571589~hmac=03ecb6c3f29187d8c04fcb3e1fbeb18f62b512c8438edef2c47ba720dd898268&w=740');
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
    @apply text-base;
    @apply leading-7;
    @apply font-thin;
  }

  &__link:hover {
    @apply text-grey-64;
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
