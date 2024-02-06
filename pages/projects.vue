<template>
  <section class="projects">
    <SectionHeadline line1="Browse My Recent" line2="Projects" />
    <div class="projects__wrapper">
      <div class="projects__unit">
        <NuxtImg
          class="projects__picture"
          src="pfeiffer-logo.jpeg"
          alt="Julius Schultz profile picture"
        />
        <div class="projects__text">
          <h3 class="projects__project-headline">Pfeiffer Vacuum</h3>
          <p class="projects__project-description">
            Development of an online shop at diva-e on behalf of Pfeiffer Vacuum
          </p>
          <button
            class="btn btn-color-2"
            onclick="location.href='https://webportal.pfeiffer-vacuum.com/global/de'"
          >
            Website
          </button>
        </div>
      </div>
      <div class="projects__unit">
        <NuxtImg
          class="projects__picture"
          src="bloomreach.jpeg"
          alt="Julius Schultz profile picture"
        />
        <div class="projects__text">
          <h3 class="projects__project-headline">Bloomreach Connector</h3>
          <p class="projects__project-description">
            Creation of a Connector for Nuxt.js projects to the CMS of npm
            package
          </p>
          <button
            class="btn"
            onclick="location.href='https://www.npmjs.com/package/bloomreach-with-nuxt'"
          >
            npm package
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.projects {
  @apply text-grey-16;

  &__wrapper {
    @apply flex flex-col;
    @apply justify-center;
    @apply gap-x-4;

    @screen md {
      @apply flex-row;
    }
  }

  &__unit {
    padding: 20px;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    max-width: 450px;
    text-align: center;
  }

  &__picture {
    @apply w-[300px] h-[300px];
    border-radius: 2rem;
    @apply pb-6;
  }

  &__project-headline {
    @apply text-xl;
    @apply font-bold;
    @apply pb-6;
  }

  &__project-description {
    @apply text-grey-32;
    @apply pb-6;
  }
}
</style>
