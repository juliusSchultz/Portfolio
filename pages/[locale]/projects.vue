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
          <Button
            class="btn btn-color-2"
            to="https://webportal.pfeiffer-vacuum.com/global/de"
            label="Website"
            variant="secondary"
            icon="arrow_forward"
          />
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
            Creation of a reusable Connector for Nuxt.js projects
          </p>
          <Button
            to="https://www.npmjs.com/package/bloomreach-with-nuxt"
            label="npm package"
            variant="secondary"
            shape="outlined"
            icon="arrow_forward"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.projects {
  @apply text-grey-16;
  @apply flex flex-col;
  @apply items-center;

  &__wrapper {
    @apply grid;
    @apply grid-cols-1;
    @apply justify-center;
    @apply gap-8;
    align-items: center;
    width: fit-content;

    @screen md {
      @apply grid-cols-2;
      @apply flex-row;
    }
  }

  &__unit {
    @apply flex flex-col;
    @apply justify-between;
    @apply p-5;
    @apply rounded-sm;
    @apply h-full;
    @apply text-center;
    @apply max-w-[450px];
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
  }

  &__picture {
    @apply w-full;
    border-radius: 2rem;
  }

  &__text {
    @apply pt-6;
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
