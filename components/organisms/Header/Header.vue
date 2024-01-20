<template>
  <nav id="desktop-nav" class="header">
    <div class="header__logo">Julius Schultz</div>
    <div>
      <ul class="header__links">
        <li v-for="link in links">
          <NuxtLink class="header__link" :to="link.href">
            {{link.label}}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div class="logo">Julius Schultz</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links">
        <li><a href="#about" onclick="toggleMenu()">About</a></li>
        <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
        <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Header',
  setup() {
    const toggleMenu = () => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }

    const links = [
        {href: '/about', label: 'About'},
      {href: '/experience', label: 'Experience'},
      {href: '/projects', label: 'Projects'},
      {href: '/contact', label: 'Contact'} ]

    return {
      toggleMenu,
      links
    }
  }
})
</script>

<style>
.header {
  @apply flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;

  &__logo{
    font-size: 2rem;
  }

  &__logo:hover{
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
      color: grey;
      text-decoration: underline;
      text-underline-offset: 1rem;
      text-decoration-color: rgb(181, 181, 181);
  }
}

/* HAMBURGER MENU */

#hamburger-nav {
  display: none;
}

.hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
}

.hamburger-icon span {
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3 ease-in-out;
}

.menu-links {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3 ease-in-out;
}

.menu-links a {
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}

.menu-links li {
  list-style: none;
}

.menu-links.open {
  max-height: 300px;
}

.hamburger-icon.open span:first-child {
  transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:last-child {
  transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
  transform: none;
}

.hamburger-icon span:first-child {
  opacity: 1;
}

.hamburger-icon span:first-child {
  transform: none;
}
</style>