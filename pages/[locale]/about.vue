<template>
  <section class="about">
    <SectionHeadline line1="Get To Know More" line2="About Me" />
    <span class="about__text">
      <p>
        “Use your own understanding and don’t fail because of laziness or
        cowardice,” this guiding principle of the Age of Enlightenment has
        shaped me and drives me to constantly expand my horizons of knowledge.
        <br />
        <br />
        In order to dive deeper into new technologies and especially software
        develop, I decided to study international media computing. Currently,
        topics that interest me quite a lot are artificial intelligence and web
        development.
      </p>
    </span>
    <NuxtImg src="side.jpeg" alt="Profile picture" class="about__pic" />
    <div class="about__experience-wrapper">
      <div class="about__experience-container">
        <Icon
          class="about__experience-icon"
          icon="cast_for_education"
          size="large"
        />
        <div class="about__experience-text">
          <h3 class="about__experience-text--headline">Education</h3>
          <p class="about__experience-text--description">
            B.Sc. Bachelors Degree<br />University of Applied Sciences Berlin
          </p>
        </div>
      </div>
      <div class="about__experience-container">
        <Icon class="about__experience-icon" icon="work_history" size="large" />
        <div class="about__experience-text">
          <h3 class="about__experience-text--headline">Work Experience</h3>
          <p class="about__experience-text--description">
            2+ years <br />Frontend Development
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
<style>
.about {
  @apply flex flex-col;

  &__text {
    text-align: center;
    @apply mb-14;
  }

  &__pic {
    @apply w-[400px] h-[400px];
    @apply rounded-2xl;
    @apply self-center;
    @apply mb-14;
  }

  &__experience-wrapper {
    @apply flex flex-col;
    @apply justify-between;
    @apply gap-6;

    @screen md {
      @apply flex-row;
    }
  }

  &__experience-container {
    width: 100%;
    @apply text-white;
    @apply bg-grey-32;
    @apply rounded-2xl;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__experience-icon {
    padding: 46px;
    @apply bg-blue;
    @apply rounded-l-2xl;
  }

  &__experience-text {
    @apply flex flex-col;
    @apply gap-y-2;
    @apply py-5;
    @apply px-12;
    @apply w-full;

    &--headline {
      @apply text-base;
    }

    &--description {
      @apply font-thin;
      @apply text-sm;
    }
  }
}
</style>
