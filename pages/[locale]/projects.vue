<template>
  <section class="projects">
    <SectionHeadline
      :line1="$t('projectsPage.sectionHeadline1')"
      :line2="$t('projectsPage.sectionHeadline2')"
    />
    <div class="projects__wrapper">
      <div class="projects__unit">
        <img
          class="projects__picture"
          src="~/assets/images/pfeiffer-logo.jpeg"
          :alt="$t('projectsPage.project1.altPicture')"
        />
        <div class="projects__text">
          <h3 class="projects__project-headline">
            {{ $t('projectsPage.project1.title') }}
          </h3>
          <p class="projects__project-description">
            {{ $t('projectsPage.project1.description') }}
          </p>
          <Button
            :to="`https://webportal.pfeiffer-vacuum.com/global/${locale}`"
            :label="$t('projectsPage.project1.buttonLabel')"
            variant="secondary"
            icon="arrow_forward"
          />
        </div>
      </div>
      <div class="projects__unit">
        <img
          class="projects__picture"
          src="../../assets/images/bloomreach.jpeg"
          :alt="$t('projectsPage.project2.altPicture')"
        />
        <div class="projects__text">
          <h3 class="projects__project-headline">
            {{ $t('projectsPage.project2.title') }}
          </h3>
          <p class="projects__project-description">
            {{ $t('projectsPage.project2.description') }}
          </p>
          <Button
            to="https://www.npmjs.com/package/bloomreach-with-nuxt"
            :label="$t('projectsPage.project2.buttonLabel')"
            variant="secondary"
            shape="outlined"
            icon="arrow_forward"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Julius Schultz - Projects Page',
})

useSeoMeta({
  title: 'Julius Schultz - Projects Page',
  description:
    'This is the projects page of the software developer Julius Schultz. You can find on this page all recent projects of Julius Schultz.',
  ogDescription:
    'This is the projects page of the software developer Julius Schultz. You can find on this page all recent projects of Julius Schultz.',
  ogImage: 'https://www.juliusschultz.com/_nuxt/profile.BipV7A1d.png',
  twitterCard: 'summary_large_image',
})

const { locale } = useI18n()
</script>

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
