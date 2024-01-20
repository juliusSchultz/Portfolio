<template>
  <footer class="footer">
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
    <p>Copyright &#169; 2023 Julius Schultz. All Rights Reserved.</p>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
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

<script setup lang="ts"></script>
<style>
.footer {
  height: 26vh;
  background-color: #525252;
  color: white;

  &__links {
    @apply flex;
    justify-content: center;
    @apply py-6;
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
    color: grey;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);
  }
}

footer p {
  text-align: center;
}
</style>
